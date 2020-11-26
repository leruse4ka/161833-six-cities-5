import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import {getMockOffers, mockOffer} from "../../store/test-data";

it(`Render Map`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const tree = renderer.create(
      <Map
        cityCord={mockOffer.location}
        offers={getMockOffers(5)}
        activeId={-1}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
