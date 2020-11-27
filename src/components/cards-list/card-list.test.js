import React from "react";
import renderer from "react-test-renderer";
import {CardsList} from "./cards-list";
import {noop, getMockOffers} from "../../store/test-data";
import {BrowserRouter} from "react-router-dom";

const mockDefaultType = {
  nameClassCard: ``,
  nameClassImg: ``,
  nameClassInfo: ``,
  width: 0,
  height: 0,
};

it(`Render CardList`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <CardsList
          offers={getMockOffers(3)}
          classNames={``}
          defaultType={mockDefaultType}
          onOfferFocus={noop}
          onOfferLeave={noop}
          onFavoriteClick={noop}
        >
          <React.Fragment />
        </CardsList>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
