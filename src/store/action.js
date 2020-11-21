export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_ACTIVE_ID: `CHANGE_ACTIVE_ID`,
  RESET_ACTIVE_ID: `RESET_ACTIVE_ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`,
  LOAD_OFFERS_FAVORITE: `LOAD_OFFERS_FAVORITE`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

export const ActionCreator = {
  changeCity: (evt) => {
    evt.preventDefault();
    return {
      type: ActionType.CHANGE_CITY,
      payload: evt.target.textContent,
    };
  },
  changeSort: (evt) => {
    evt.preventDefault();
    return {
      type: ActionType.CHANGE_SORT,
      payload: evt.target.textContent,
    };
  },
  focusActiveId: (offer) => {
    return {
      type: ActionType.CHANGE_ACTIVE_ID,
      payload: offer.id,
    };
  },
  resetActiveId: () => {
    return {
      type: ActionType.RESET_ACTIVE_ID,
      payload: null,
    };
  },
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadOffer: (offer) => {
    return {
      type: ActionType.LOAD_OFFER,
      payload: offer
    };
  },
  loadOffersNearby: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };
  },
  loadOffersFavorite: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS_FAVORITE,
      payload: offers,
    };
  },
  loadOffersComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };
  }
};

