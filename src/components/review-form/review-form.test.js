import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";

it(`Render ReviewForm`, () => {
  const tree = renderer.create(
      <ReviewForm
        onSubmit={() => {}}
        id={12}
        isError={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
