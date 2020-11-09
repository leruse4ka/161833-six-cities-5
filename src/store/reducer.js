import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";

const initialState = {
  cityName: `Amsterdam`,
  currentSort: `Popular`,
  offers,
  activeId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        cityName: action.payload,
      });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        currentSort: action.payload,
      });
    case ActionType.CHANGE_ACTIVE_ID:
      return extend(state, {
        activeId: action.payload,
      });
    case ActionType.RESET_ACTIVE_ID:
      return extend(state, {
        activeId: action.payload,
      });
  }

  return state;
};

export {reducer};
