import React from "react";
import PropTypes from "prop-types";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";
import {TypesCard} from "../../const";

const FavoriteCardList = (props) => {
  const {offers, cityName} = props;
  return (
    offers
      .filter((offer) => offer.city.name === cityName)
      .map((el) => <Card
        offer={el}
        key={el.id}
        typeCard={TypesCard.favorites}
      />)
  );
};

FavoriteCardList.propTypes = {
  offers: mainPageOffersProp,
  cityName: PropTypes.string.isRequired,
};

export default FavoriteCardList;
