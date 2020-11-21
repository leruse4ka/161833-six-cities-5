import React from "react";
import PropTypes from "prop-types";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";
import {DefaultType} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {fetchOffer, fetchOffersNearbyList, setFavorite, fetchComments} from "../../store/api-actions";

const FavoriteCardsList = (props) => {
  const {offers, cityName, onOfferFocus, onOfferLeave, onFavoriteClick, onOfferClick} = props;
  return (
    offers
      .filter((offer) => offer.city.name === cityName)
      .map((el) => <Card
        offer={el}
        key={el.id}
        defaultType={DefaultType.favorites}
        onOfferFocus={onOfferFocus}
        onOfferLeave={onOfferLeave}
        onFavoriteClick={onFavoriteClick}
        onOfferClick={onOfferClick}
      />)
  );
};

FavoriteCardsList.propTypes = {
  offers: mainPageOffersProp,
  cityName: PropTypes.string.isRequired,
  onOfferFocus: PropTypes.func.isRequired,
  onOfferLeave: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onOfferFocus(offer) {
    dispatch(ActionCreator.focusActiveId(offer));
  },
  onOfferLeave() {
    dispatch(ActionCreator.resetActiveId());
  },
  onOfferClick(id) {
    dispatch(fetchOffer(id));
    dispatch(fetchOffersNearbyList(id));
    dispatch(fetchComments(id));
  },
  onFavoriteClick(id, status, offer) {
    dispatch(setFavorite(id, status, offer));
  },
});

export default connect(null, mapDispatchToProps)(FavoriteCardsList);
