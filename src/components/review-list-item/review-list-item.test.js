import React from "react";
import renderer from "react-test-renderer";
import ReviewListItem from "./review-list-item";
import {commentsMock} from "../../store/test-data";

it(`Render ReviewListItem`, () => {
  const tree = renderer.create(
      <ReviewListItem
        review={commentsMock[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
