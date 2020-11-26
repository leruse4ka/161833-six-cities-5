import {Sorts} from "./sorts";
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Click by sorts calls callback`, () => {
  const handleSortClick = jest.fn();

  const wrapper = shallow(<Sorts
    onSortClick={handleSortClick}
    onMenuClick={() => {}}
    currentSort={`Popular`}
    isOpen={true}>
  </Sorts>
  );

  const sortsLi = wrapper.find(`.places__option`);
  const sortsOne = sortsLi.at(0);

  sortsOne.simulate(`click`, mockEvent);
  expect(handleSortClick).toHaveBeenCalledTimes(1);
});
