import React from "react";
import PropTypes from "prop-types";
import {SORT_TYPES} from "../../const";

const Sorts = (props) => {
  const {onSortClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORT_TYPES.map((item) => {
          return (
            <li key={item} onClick={(evt) => {
              evt.preventDefault();
              onSortClick(evt);
            }}
            className="places__option" tabIndex="0">{item}</li>
          );
        })}
      </ul>
    </form>
  );
};

Sorts.propTypes = {
  onSortClick: PropTypes.func.isRequired,
};

export default Sorts;
