export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_ACTIVE_ID: `CHANGE_ACTIVE_ID`,
  RESET_ACTIVE_ID: `RESET_ACTIVE_ID`,
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
  }
};

