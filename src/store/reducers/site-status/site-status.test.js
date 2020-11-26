import {ActionType} from "../../action";
import {siteStatus} from "./site-status";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(siteStatus(void 0, {})).toEqual({
    cityName: `Amsterdam`,
    currentSort: `Popular`,
    activeId: null,
  });
});

it(`Reducer should change city by a given value`, () => {
  expect(siteStatus({
    cityName: `Amsterdam`,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Paris`,
  })).toEqual({
    cityName: `Paris`,
  });
});

it(`Reducer should change sort by a given value`, () => {
  expect(siteStatus({
    currentSort: `Popular`,
  }, {
    type: ActionType.CHANGE_SORT,
    payload: `Price: low to high`,
  })).toEqual({
    currentSort: `Price: low to high`,
  });
});

it(`Reducer should change active id by a given value`, () => {
  expect(siteStatus({
    activeId: null,
  }, {
    type: ActionType.CHANGE_ACTIVE_ID,
    payload: 13,
  })).toEqual({
    activeId: 13,
  });
});

it(`Reducer should reset active id by a given value`, () => {
  expect(siteStatus({
    activeId: 13,
  }, {
    type: ActionType.RESET_ACTIVE_ID,
    payload: null,
  })).toEqual({
    activeId: null,
  });
});
