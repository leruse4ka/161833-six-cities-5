import React from "react";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import FavoriteCardsList from "../favorite-cards-list/favorite-cards-list";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const FavoriteList = (props) => {
  const {offers, onCityClick} = props;
  const listElements = Array.from(new Set(offers.map((item) => item.city.name)));
  return (
    listElements.map((item) => {
      return (
        <li key={item} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="">
                <span onClick={(evt) => onCityClick(evt)}>{item}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <FavoriteCardsList offers={offers} cityName={item}/>
          </div>
        </li>
      );
    })
  );
};

FavoriteList.propTypes = {
  favoriteOffers: mainPageOffersProp,
  onCityClick: PropTypes.func.isRequired,
};

export default FavoriteList;
