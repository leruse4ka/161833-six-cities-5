import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CitiesList from "./cities-list";

configure({adapter: new Adapter()});

it(`Click by city calls callback`, () => {
  const handleCityClick = jest.fn();

  const wrapper = mount(<CitiesList
    cityName={`Paris`}
    onCityClick={handleCityClick}>
  </CitiesList>
  );

  const cities = wrapper.find(`a`);
  const city = cities.at(1);

  city.simulate(`click`);
  expect(handleCityClick).toHaveBeenCalledTimes(1);
});
