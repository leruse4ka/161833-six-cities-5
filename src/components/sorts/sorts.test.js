import React from "react";
import renderer from "react-test-renderer";
import {Sorts} from "./sorts";

it(`Render Sorts`, () => {
  const tree = renderer.create(
      <Sorts
        onSortClick={() => {}}
        onMenuClick={() => {}}
        currentSort={`Popular`}
        isOpen={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
