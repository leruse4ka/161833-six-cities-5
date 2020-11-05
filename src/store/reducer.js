import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";

const initialState = {
  cityName: `Paris`,
  offers,
  favoriteOffers: offers.filter((item) => item.isFavorite),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        cityName: action.payload,
      });
  }

  return state;
};

export {reducer};
