import React from "react";
import PropTypes from "prop-types";
import {StarStyle} from "../../const";

const ReviewListItem = (props) => {
  const {review} = props;
  const {
    name,
    avatar,
    rating,
    date,
    description
  } = review;

  const reviewRating = StarStyle[rating];
  const dateReview = new Date(date);

  return (
    <li key={name} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: reviewRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {description}
        </p>
        <time className="reviews__time" dateTime={dateReview}>{dateReview.toLocaleString(`en-GB`, { month: `long` })} {dateReview.getFullYear()}</time>
      </div>
    </li>
  );
};

ReviewListItem.propTypes = {
  review: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewListItem;
