import React from "react";
import renderer from "react-test-renderer";
import FavoriteList from "./favorite-list";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {getMockOffers, mockOffer, commentsMock, adaptedLoginDataMock} from "../../store/test-data";
import {BrowserRouter} from "react-router-dom";
import {NameSpace} from "../../store/reducers/root-reducer";

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
    isLoading: false,
  }
};

it(`Render FavoriteList`, () => {
  const mockStore = configureStore();
  const store = mockStore(mockState);
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <FavoriteList
            offers={getMockOffers(3)}
          >
            <React.Fragment />
          </FavoriteList>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
