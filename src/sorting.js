import {SortType} from "./const";
import {sortLowToHigh, sortHightToLow, sortRating, sortCommentData} from "./utils";

export const sorting = (currentSortType, sortingOffers) => {
  switch (currentSortType) {
    case SortType.LOW_TO_HIGH:
      return sortingOffers.slice().sort(sortLowToHigh);
    case SortType.HIGH_TO_LOW:
      return sortingOffers.slice().sort(sortHightToLow);
    case SortType.TOP_RATED_FIRST:
      return sortingOffers.slice().sort(sortRating);
  }
  return sortingOffers;
};

export const sortingComments = (comments) => {
  return comments.slice().sort(sortCommentData);
};
