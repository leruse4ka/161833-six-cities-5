export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

export const ActionCreator = {
  changeCity: (evt) => {
    evt.preventDefault();
    return {
      type: ActionType.CHANGE_CITY,
      payload: evt.target.textContent,
    };
  },
};

