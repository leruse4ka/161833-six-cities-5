import React from "react";
import ReviewListItem from "../review-list-item/review-list-item";
import propertyPageCommentsProp from "../pages/property-page/property-page-comments.prop";

const ReviewList = (props) => {
  const {comments} = props;
  return (
    <ul className="reviews__list">
      {comments.map((item, i) => {

        return (
          <ReviewListItem key={item.name + `${i}`} review={item} />
        );
      })}
    </ul>
  );
};

ReviewList.propTypes = {
  comments: propertyPageCommentsProp,
};

export default ReviewList;
