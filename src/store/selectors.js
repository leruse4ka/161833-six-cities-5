import {createSelector} from "reselect";
import {sorting, sortingComments} from "../sorting";

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

export const getSortComments = createSelector(
    getComments,
    (comments) => sortingComments(comments)
);
