import {extend} from "../../../utils";
import {ActionType} from "../../action";


const initialState = {
  offers: [],
  activeOffer: {},
  offersNearby: [],
  offersFavorite: [],
  comments: [],
  isLoading: false,
  isError: false,
};

const siteData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload,
      });
    case ActionType.LOAD_OFFERS_FAVORITE:
      return extend(state, {
        offersFavorite: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.IS_LOADED:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.ERR_COMMENT:
      return extend(state, {
        isError: true,
      });
  }
  return state;
};

export {siteData};
