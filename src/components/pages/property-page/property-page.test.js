import React from "react";
import renderer from "react-test-renderer";
import {PropertyPage} from "./property-page";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {getMockOffers, mockOffer, commentsMock, adaptedLoginDataMock} from "../../../store/test-data";
import {BrowserRouter} from "react-router-dom";
import {NameSpace} from "../../../store/reducers/root-reducer";
import thunk from "redux-thunk";
import * as ApiAction from '../../../store/api-actions';
import {AuthorizationStatus} from "../../../const";

const div = document.createElement(`div`);
div.id = `map`;
document.body.appendChild(div);

const mockState = {
  [NameSpace.DATA]: {
    offersFavorite: getMockOffers(3),
    offers: getMockOffers(3),
    comments: commentsMock,
    offersNearby: getMockOffers(5),
    activeOffer: mockOffer,
    isLoading: true,
    isError: false,
  },
  [NameSpace.STATUS]: {
    cityName: `Amsterdam`,
    activeId: -1,
    currentSort: `Popular`
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTH`,
    loginData: adaptedLoginDataMock,
    isLoading: true,
  }
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
ApiAction.checkAuth = () => (dispatch) => dispatch(jest.fn());

it(`Render PropertyPage`, () => {
  const store = mockStore(mockState);
  const match = {params: {id: `1`}};
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PropertyPage
            getOffer={() => {}}
            match={match}
            id={12}
            isLoading={true}
            authorizationStatus={AuthorizationStatus.AUTH}
            onFavoriteClick={() => {}}
            offer={mockOffer}
            offersNearby={getMockOffers(2)}
            comments={commentsMock}
          >
            <React.Fragment />
          </PropertyPage>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
