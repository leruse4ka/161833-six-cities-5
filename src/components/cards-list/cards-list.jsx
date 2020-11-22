import React from "react";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {fetchOffer, fetchOffersNearbyList, setFavorite, fetchComments} from "../../store/api-actions";

const CardsList = (props) => {
  const {offers, classNames, defaultType, onOfferFocus, onOfferLeave, onOfferClick, onFavoriteClick} = props;

  return (
    <div className={classNames + ` places__list`}>
      {offers.map((offer) => {
        return (
          <Card key={offer.id}
            offer={offer}
            defaultType={defaultType}
            onOfferFocus={onOfferFocus}
            onOfferLeave={onOfferLeave}
            onFavoriteClick={onFavoriteClick}
            onOfferClick={onOfferClick} />
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
  onOfferClick: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onOfferClick(id) {
    dispatch(fetchOffer(id));
    dispatch(fetchOffersNearbyList(id));
    dispatch(fetchComments(id));
  },
  onOfferFocus(offer) {
    dispatch(ActionCreator.focusActiveId(offer));
  },
  onOfferLeave() {
    dispatch(ActionCreator.resetActiveId());
  },
  onFavoriteClick(id, status, offer) {
    dispatch(setFavorite(id, status, offer));
  }
});

export default connect(null, mapDispatchToProps)(CardsList);
