import React from "react";
import renderer from "react-test-renderer";
import ReviewList from "./review-list";
import {commentsMock} from "../../store/test-data";

it(`Render ReviewList`, () => {
  const tree = renderer.create(
      <ReviewList
        comments={commentsMock}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
