import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  loginData: {
    name: ``,
    avatar: ``
  },
  isLoading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_LOGIN_DATA:
      return extend(state, {
        loginData: action.payload,
      });
    case ActionType.IS_LOADED_DATA:
      return extend(state, {
        isLoading: true,
      });
  }

  return state;
};

export {user};
