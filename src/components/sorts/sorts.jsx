import React from "react";
import PropTypes from "prop-types";
import {SORT_TYPES} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Sorts = (props) => {
  const {onSortClick, currentSort, isOpen, onMenuClick} = props;
  const listClass = isOpen ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;
  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={onMenuClick} >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={listClass}>
        {SORT_TYPES.map((item) => {
          return (
            <li key={item} onClick={(evt) => {
              evt.preventDefault();
              onSortClick(evt);
              onMenuClick(evt);
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
  currentSort: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({STATUS}) => ({
  currentSort: STATUS.currentSort,
});

const mapDispatchToProps = (dispatch) => ({
  onSortClick(evt) {
    dispatch(ActionCreator.changeSort(evt));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorts);

