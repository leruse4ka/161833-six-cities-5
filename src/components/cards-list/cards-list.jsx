import React from "react";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";
import PropTypes from "prop-types";

const CardsList = (props) => {
  const {offers, classNames, defaultType, onOfferFocus, onOfferLeave} = props;

  return (
    <div className={classNames + ` places__list`}>
      {offers.map((offer) => {
        return (
          <Card key={offer.id}
            offer={offer}
            onOfferFocus={onOfferFocus}
            defaultType={defaultType}
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

export default CardsList;
