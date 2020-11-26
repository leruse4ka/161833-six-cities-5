import {ActionCreator, ActionType} from "./action";
import {mockOffer, getMockOffers, commentsMock, adaptedLoginDataMock} from "./test-data";

const offers = getMockOffers(10);
const offer = mockOffer;

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });

  it(`Action creator for change sort returns correct action`, () => {
    expect(ActionCreator.changeSort(`Top rated first`)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: `Top rated first`,
    });
  });

  it(`Action creator for focus Active Id returns correct action`, () => {
    expect(ActionCreator.focusActiveId(mockOffer)).toEqual({
      type: ActionType.CHANGE_ACTIVE_ID,
      payload: 1,
    });
  });

  it(`Action creator for reset Active Id returns correct action`, () => {
    expect(ActionCreator.resetActiveId()).toEqual({
      type: ActionType.RESET_ACTIVE_ID,
      payload: null,
    });
  });

  it(`Action creator for require Authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    });
  });

  it(`Action creator for load Offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator for redirect To Route returns correct action`, () => {
    expect(ActionCreator.redirectToRoute(`/offer`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/offer`,
    });
  });

  it(`Action creator for load Offer returns correct action`, () => {
    expect(ActionCreator.loadOffer(offer)).toEqual({
      type: ActionType.LOAD_OFFER,
      payload: offer,
    });
  });

  it(`Action creator for load Offers Nearby returns correct action`, () => {
    expect(ActionCreator.loadOffersNearby(offers)).toEqual({
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    });
  });

  it(`Action creator for load Offers Favorite returns correct action`, () => {
    expect(ActionCreator.loadOffersFavorite(offers)).toEqual({
      type: ActionType.LOAD_OFFERS_FAVORITE,
      payload: offers,
    });
  });

  it(`Action creator for load Offers Comments returns correct action`, () => {
    expect(ActionCreator.loadOffersComments(commentsMock)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: commentsMock,
    });
  });

  it(`Action creator for submit Comment returns correct action`, () => {
    expect(ActionCreator.submitComment()).toEqual({
      type: ActionType.SUBMIT_COMMENT,
    });
  });

  it(`Action creator for is Loading Offer returns correct action`, () => {
    expect(ActionCreator.isLoadingOffer()).toEqual({
      type: ActionType.IS_LOADED,
    });
  });

  it(`Action creator for is Loading Data returns correct action`, () => {
    expect(ActionCreator.isLoadingData()).toEqual({
      type: ActionType.IS_LOADED_DATA,
    });
  });

  it(`Action creator for load Login Data returns correct action`, () => {
    expect(ActionCreator.loadLoginData(adaptedLoginDataMock)).toEqual({
      type: ActionType.LOAD_LOGIN_DATA,
      payload: adaptedLoginDataMock,
    });
  });

  it(`Action creator for error comment returns correct action`, () => {
    expect(ActionCreator.errComment()).toEqual({
      type: ActionType.ERR_COMMENT,
    });
  });
});
