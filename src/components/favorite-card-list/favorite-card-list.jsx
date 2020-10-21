import React from "react";
import PropTypes from "prop-types";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";

const FavoriteCardList = (props) => {
  const {offers, cityName} = props;
  return (
    offers
      .filter((offer) => offer.city.name === cityName)
      .map((el) => <Card
        offer={el}
        key={el.id}
        nameClassCard={`favorites__card`}
        nameClassImg={`favorites`}
        nameClassInfo={`favorites__card-info `}
        activeOfferHandler={() => { }}
        width={`150`}
        height={`110`}
      />)
  );
};

FavoriteCardList.propTypes = {
  offers: mainPageOffersProp,
  cityName: PropTypes.string.isRequired,
};

export default FavoriteCardList;
