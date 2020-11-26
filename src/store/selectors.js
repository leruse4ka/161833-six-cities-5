import {createSelector} from "reselect";
import {sorting, sortingComments} from "../sorting";

const MAX_COMMENTS = 10;

const getOffers = (state) => state.DATA.offers;
const getCurrentSort = (state) => state.STATUS.currentSort;
const getCityName = (state) => state.STATUS.cityName;

export const getFilterOffers = createSelector(
    getOffers,
    getCurrentSort,
    getCityName,
    (offers, currentSort, cityName) => sorting(currentSort, Array.from(offers.slice().filter((item) => item.city.name === cityName)))
);

const getComments = (state) => state.DATA.comments;

export const getSortOffers = createSelector(
    getComments,
    (comments) => sortingComments(comments).slice(0, MAX_COMMENTS)
);
