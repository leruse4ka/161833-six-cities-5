import React from "react";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CardsList = (props) => {
  const {offers, classNames, defaultType, onOfferFocus, onOfferLeave} = props;

  return (
    <div className={classNames + ` places__list`}>
      {offers.map((offer) => {
        return (
          <Card key={offer.id}
            offer={offer}
            defaultType={defaultType}
            onOfferFocus={onOfferFocus}
            onOfferLeave={onOfferLeave} />
        );
      })}
    </div>
  );
};

CardsList.defaultProps = {
  classNames: `cities__places-list tabs__content`,
  defaultType: {
    nameClassCard: `cities__place-card`,
    nameClassImg: `cities`,
    nameClassInfo: ``,
    width: 260,
    height: 200,
  },
};

CardsList.propTypes = {
  offers: mainPageOffersProp,
  classNames: PropTypes.string.isRequired,
  defaultType: PropTypes.shape({
    nameClassCard: PropTypes.string.isRequired,
    nameClassImg: PropTypes.string.isRequired,
    nameClassInfo: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  onOfferFocus: PropTypes.func.isRequired,
  onOfferLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onOfferFocus(offer) {
    dispatch(ActionCreator.focusActiveId(offer));
  },
  onOfferLeave() {
    dispatch(ActionCreator.resetActiveId());
  }
});

export default connect(null, mapDispatchToProps)(CardsList);
