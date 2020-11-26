import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {getMockOffers, mockOffer, commentsMock} from "../../../store/test-data";
import PropertyPageContent from "./property-page-content";
import {AuthorizationStatus} from "../../../const";

const mockEvent = {
  preventDefault() {}
};

configure({adapter: new Adapter()});

it(`Click by mouseEnter calls callback`, () => {
  const handleFavoriteClick = jest.fn();

  const wrapper = shallow(<PropertyPageContent
    onFavoriteClick={handleFavoriteClick}
    offer={mockOffer}
    comments={commentsMock}
    offersNearby={getMockOffers(3)}
    id={12}
    authorizationStatus={AuthorizationStatus.AUTH}>
  </PropertyPageContent>
  );

  wrapper.find(`.property__bookmark-button`).simulate(`Click`, mockEvent);
  expect(handleFavoriteClick).toHaveBeenCalledTimes(1);
});
