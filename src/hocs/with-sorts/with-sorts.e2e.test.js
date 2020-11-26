import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSorts from "./with-sorts";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;

const MockComponentWrapped = withSorts(MockComponent);

it(`Should activePlayerId eq 0`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().isOpen).toEqual(false);
});
