import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {user} from "./user";
import {login, checkAuth} from "../../api-actions";
import {adaptToClientLogin} from "../../../utils";
import {AuthorizationStatus} from "../../../const";
import {loginDataMock} from "../../test-data";


const noop = () => {};
const adaptedLoginData = adaptToClientLogin(loginDataMock);

const api = createAPI(noop);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    loginData: {
      name: ``,
      avatar: ``
    },
    isLoading: false,
  });
});

describe(`Reducer should update is correctly`, () => {
  it(`Reducer should update authorizationStatus to auth`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`Reducer should update loginData`, () => {
    expect(user({
      loginData: {
        name: ``,
        avatar: ``
      },
    }, {
      type: ActionType.LOAD_LOGIN_DATA,
      payload: {name: `Lala`, avatar: `url`}
    })).toEqual({
      loginData: {
        name: `Lala`,
        avatar: `url`
      },
    });
  });

  it(`Reducer should update isLoading`, () => {
    expect(user({
      isLoading: false,
    }, {
      type: ActionType.IS_LOADED_DATA,
      payload: true
    })).toEqual({
      isLoading: true,
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorization = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, loginDataMock);

    return checkAuthorization(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_LOGIN_DATA,
          payload: adaptedLoginData
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.IS_LOADED_DATA,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Should make a correct API call to /login GET 401`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorization = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(401);

    return checkAuthorization(dispatch, noop, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.IS_LOADED_DATA,
        });
      });
  });

  it(`Should make a correct API call to /login POST 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginProcess = login(fakeUser);

    apiMock
      .onPost(`/login`)
      .reply(200, loginDataMock);

    return loginProcess(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_LOGIN_DATA,
          payload: adaptedLoginData
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.IS_LOADED_DATA,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/favorites`
        });
      });
  });
});
