import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {siteData} from "./site-data";
import {fetchOffersList, fetchOffer, fetchOffersFavorite, fetchOffersNearbyList, fetchComments, setFavorite, comments as sendComments} from "../../api-actions";
import {adaptToClient, adaptToClientComments} from "../../../utils";

const api = createAPI(() => {});

const noop = () => {};
const activeOffer = {
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatar_url": `img/1.png`,
    "id": 3,
    "is_pro": true,
    "name": `Angelina`
  },
  "id": 1,
  "images": [`img/1.png`, `img/2.png`],
  "is_favorite": false,
  "is_premium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "preview_image": `img/1.png`,
  "price": 120,
  "rating": 4.8,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `apartment`
};

const comments = [
  {
    "comment": `Comment`,
    "date": `2020-10-30T19:03:49.647Z`,
    "id": 1,
    "rating": 3,
    "user": {
      "avatar": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
      "id": 13,
      "isPro": false,
      "name": `La`,
    }
  },
  {
    "comment": `Comment`,
    "date": `2020-10-30T19:03:49.647Z`,
    "id": 2,
    "rating": 5,
    "user": {
      "avatar": ``,
      "id": 12,
      "isPro": false,
      "name": `ABC`,
    }
  },
];

const getMockOffers = (count) => {
  const mockOffers = Array(count)
    .fill(``)
    .map((_, index) => {
      return {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "id": index + 1,
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      };
    });

  return mockOffers;
};

const offers = getMockOffers(2);
const offersNearby = getMockOffers(1);
const offersFavorite = getMockOffers(1);

const adaptedOffer = adaptToClient(activeOffer);
const adaptedOffers = offers.map((it) => adaptToClient(it));
const adaptedComments = comments.map((it) => adaptToClientComments(it));

it(`Reducer without additional parameters should return initial state`, () => {
  expect(siteData(void 0, {})).toEqual({
    offers: [],
    activeOffer: {},
    offersNearby: [],
    offersFavorite: [],
    comments: [],
    isLoading: false,
    isError: false,
  });
});
describe(`Reducer should update is correctly`, () => {
  it(`Reducer should update offers by load offers`, () => {
    expect(siteData({
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    })).toEqual({
      offers,
    });
  });

  it(`Reducer should update offer by load offer`, () => {
    expect(siteData({
      activeOffer: {},
    }, {
      type: ActionType.LOAD_OFFER,
      payload: activeOffer,
    })).toEqual({
      activeOffer,
    });
  });

  it(`Reducer should update offersNearby by load offersNearby`, () => {
    expect(siteData({
      offersNearby: [],
    }, {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offersNearby,
    })).toEqual({
      offersNearby,
    });
  });

  it(`Reducer should update offersFavorite by load offersFavorite`, () => {
    expect(siteData({
      offersFavorite: [],
    }, {
      type: ActionType.LOAD_OFFERS_FAVORITE,
      payload: offersFavorite,
    })).toEqual({
      offersFavorite,
    });
  });

  it(`Reducer should update comments by load comments`, () => {
    expect(siteData({
      comments: [],
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    })).toEqual({
      comments,
    });
  });

  it(`Reducer should update comments by load comments`, () => {
    expect(siteData({
      isLoading: false,
    }, {
      type: ActionType.IS_LOADED,
    })).toEqual({
      isLoading: true,
    });
  });

  it(`Reducer should update isError by load error`, () => {
    expect(siteData({
      isError: false,
    }, {
      type: ActionType.ERR_COMMENT,
    })).toEqual({
      isError: true,
    });
  });
});


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadOffers = fetchOffersList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, offers);

    return loadOffers(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_OFFERS,
          payload: adaptedOffers
        });
      });
  });

  it(`Should make a correct API call to /hotel/id GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadOffer = fetchOffer(id);

    apiMock
      .onGet(`/hotels/${id}`)
      .reply(200, activeOffer);

    return loadOffer(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: adaptedOffer
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.IS_LOADED,
        });
      });
  });

  it(`Should make a correct API call to /favorite GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadOffers = fetchOffersFavorite();

    apiMock
      .onGet(`/favorite`)
      .reply(200, offers);

    return loadOffers(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_FAVORITE,
          payload: adaptedOffers
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id/nearby GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadOffers = fetchOffersNearbyList(id);

    apiMock
      .onGet(`/hotels/${id}/nearby`)
      .reply(200, offers);

    return loadOffers(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: adaptedOffers
        });
      });
  });

  it(`Should make a correct API call to /comments/:id GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadComments = fetchComments(id);

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, comments);

    return loadComments(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: adaptedComments
        });
      });
  });

  it(`Should make a correct API call to /favorite/1/1 POST 401`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const changeFavorite = setFavorite(id, status, activeOffer);

    apiMock
      .onPost(`/favorite/${id}/${status}`)
      .reply(401);

    return changeFavorite(dispatch, noop, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/login`
        });
      });
  });

  it(`Should make a correct API call to /favorites/1/1 POST 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const changeFavorite = setFavorite(id, status, adaptedOffer);

    apiMock
      .onPost(`favorite/${id}/${status}`)
      .reply(200, activeOffer);

    return changeFavorite(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: adaptedOffer,
        });
      });
  });

  it(`Should make a correct API call to /comments/1 POST 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const review = {comment: `123`, rating: 2};
    const sendApiComments = sendComments(id, review);

    apiMock
      .onPost(`comments/${id}`)
      .reply(200, comments);

    return sendApiComments(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SUBMIT_COMMENT,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS,
          payload: adaptedComments
        });
      });
  });

  it(`Should make a correct API call to /comments/1 POST 401`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const review = {comment: `123`, rating: 2};
    const sendApiComments = sendComments(id, review);

    apiMock
      .onPost(`comments/${id}`)
      .reply(401);

    return sendApiComments(dispatch, noop, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ERR_COMMENT,
        });
      });
  });
});
