import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";
import {adaptToClient, adaptToServer, adaptToClientComments, adaptToClientLogin} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map(adaptToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(ActionCreator.loadLoginData(adaptToClientLogin(data))))
    .then(() => dispatch(ActionCreator.isLoadingData()))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(ActionCreator.isLoadingData());
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptToClient(data))))
    .then(() => dispatch(ActionCreator.isLoadingOffer()))
);

export const fetchOffersFavorite = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadOffersFavorite(data.map(adaptToClient))))
);

export const fetchOffersNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data.map(adaptToClient))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffersComments(data.map(adaptToClientComments))))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(ActionCreator.loadLoginData(adaptToClientLogin(data))))
    .then(() => dispatch(ActionCreator.isLoadingData()))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/favorites`)))
);

export const setFavorite = (id, status, offer) => (dispatch, _getState, api) => (
  api.post(`favorite/${id}/${status}`, adaptToServer(offer))
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer(adaptToClient(data)));
      dispatch(fetchOffersFavorite());
      dispatch(fetchOffersList());
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(`/login`)))
);

export const comments = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`comments/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.submitComment());
      dispatch(ActionCreator.loadOffersComments(data.map(adaptToClientComments)));
    })
    .catch(() => {
      dispatch(ActionCreator.errComment());
    })
);
