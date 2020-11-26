import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";
import {noop, mockOffer} from "../../store/test-data";
import {BrowserRouter} from "react-router-dom";

const mockDefaultType = {
  nameClassCard: ``,
  nameClassImg: ``,
  nameClassInfo: ``,
  width: 0,
  height: 0,
};

it(`Card rendered`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Card
          offer={mockOffer}
          onOfferFocus={noop}
          defaultType={mockDefaultType}
          onOfferLeave={noop}
          onFavoriteClick={noop} />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
