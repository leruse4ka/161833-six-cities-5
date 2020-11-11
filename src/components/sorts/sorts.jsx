import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SORT_TYPES} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

class Sorts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {onSortClick, currentSort} = this.props;
    const {isOpen} = this.state;
    const listClass = isOpen ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;

    return (
      <form className="places__sorting" action="#" method="get" >
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleClick} >
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
                this.handleClick(evt);
              }}
              className="places__option" tabIndex="0">{item}</li>
            );
          })}
        </ul>
      </form>
    );
  }
}

Sorts.propTypes = {
  onSortClick: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
});

const mapDispatchToProps = (dispatch) => ({
  onSortClick(evt) {
    dispatch(ActionCreator.changeSort(evt));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorts);

