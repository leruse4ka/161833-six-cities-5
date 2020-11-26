import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";

it(`Render CitiesList`, () => {
  const tree = renderer.create(
      <CitiesList
        cityName={`Paris`}
        onCityClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
