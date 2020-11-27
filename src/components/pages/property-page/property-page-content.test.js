import React from "react";
import renderer from "react-test-renderer";
import PropertyPageContent from "./property-page-content";
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

it(`Render PropertyPageContent`, () => {
  const store = mockStore(mockState);
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PropertyPageContent
            onFavoriteClick={() => {}}
            offer={mockOffer}
            comments={commentsMock}
            offersNearby={getMockOffers(3)}
            id={12}
            authorizationStatus={AuthorizationStatus.AUTH}
          >
            <React.Fragment />
          </PropertyPageContent>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
