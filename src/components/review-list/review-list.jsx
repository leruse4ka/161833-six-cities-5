import React from "react";
import PropTypes from "prop-types";
import ReviewListItem from "../review-list-item/review-list-item";

const ReviewList = (props) => {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {reviews.map((item, i) => {

        return (
          <ReviewListItem key={item.name + `${i}`} review={item} />
        );
      })}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default ReviewList;
