import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop, mockOffer} from "../../store/test-data";
import Card from "./card";

const mockDefaultType = {
  nameClassCard: ``,
  nameClassImg: ``,
  nameClassInfo: ``,
  width: 0,
  height: 0,
};

configure({adapter: new Adapter()});

it(`Click by mouseEnter calls callback`, () => {
  const handleOfferFocus = jest.fn();

  const wrapper = shallow(<Card
    offer={mockOffer}
    onOfferFocus={handleOfferFocus}
    defaultType={mockDefaultType}
    onOfferLeave={noop}
    onFavoriteClick={noop}>
  </Card>
  );

  wrapper.find(`article`).simulate(`mouseEnter`);
  expect(handleOfferFocus).toHaveBeenCalledTimes(1);
});

it(`Click by mouseLeave calls callback`, () => {
  const handleOfferLeave = jest.fn();

  const wrapper = shallow(<Card
    offer={mockOffer}
    onOfferFocus={noop}
    defaultType={mockDefaultType}
    onOfferLeave={handleOfferLeave}
    onFavoriteClick={noop}>
  </Card>
  );

  wrapper.find(`article`).simulate(`mouseLeave`);
  expect(handleOfferLeave).toHaveBeenCalledTimes(1);
});

it(`Click by favorite calls callback`, () => {
  const handleFavoriteClick = jest.fn();

  const wrapper = shallow(<Card
    offer={mockOffer}
    onOfferFocus={noop}
    defaultType={mockDefaultType}
    onOfferLeave={noop}
    onFavoriteClick={handleFavoriteClick}>
  </Card>
  );

  wrapper.find(`.place-card__bookmark-button`).simulate(`click`);
  expect(handleFavoriteClick).toHaveBeenCalledTimes(1);
});
