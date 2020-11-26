import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withSorts from "./with-sorts";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withSorts(MockComponent);

it(`withSorts is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        onSortClick={() => {}}
        onMenuClick={() => {}}
        currentSort={`Popular`}
        isOpen={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
