import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";
import {adaptToClient, adaptToServer, adaptToClientComments} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map(adaptToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptToClient(data))))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/offer/${id}`)))
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
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/favorites`)))
);

export const setFavorite = (id, status, offer) => (_dispatch, _getState, api) => (
  api.post(`favorite/${id}/${status}`, adaptToServer(offer))
);

export const comments = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`comments/${id}`, {comment, rating})
    .then(() => dispatch(ActionCreator.submitComment()))
);
