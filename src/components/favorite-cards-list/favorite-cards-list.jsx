import React from "react";
import PropTypes from "prop-types";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";
import {DefaultType} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const FavoriteCardsList = (props) => {
  const {offers, cityName, onOfferFocus, onOfferLeave} = props;
  return (
    offers
      .filter((offer) => offer.city.name === cityName)
      .map((el) => <Card
        offer={el}
        key={el.id}
        defaultType={DefaultType.favorites}
        onOfferFocus={onOfferFocus}
        onOfferLeave={onOfferLeave}
      />)
  );
};

FavoriteCardsList.propTypes = {
  offers: mainPageOffersProp,
  cityName: PropTypes.string.isRequired,
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

export default connect(null, mapDispatchToProps)(FavoriteCardsList);
