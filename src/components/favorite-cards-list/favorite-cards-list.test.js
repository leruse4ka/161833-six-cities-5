import React from "react";
import renderer from "react-test-renderer";
import {FavoriteCardsList} from "./favorite-cards-list";
import {noop, getMockOffers} from "../../store/test-data";
import {BrowserRouter} from "react-router-dom";

it(`Render FavoriteCardsList`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <FavoriteCardsList
          offers={getMockOffers(3)}
          cityName={`Amsterdam`}
          onOfferFocus={noop}
          onOfferLeave={noop}
          onFavoriteClick={noop}
          onOfferClick={noop}
        >
          <React.Fragment />
        </FavoriteCardsList>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
