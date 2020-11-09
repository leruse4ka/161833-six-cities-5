import React from "react";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import FavoriteCardsList from "../favorite-cards-list/favorite-cards-list";
import PropTypes from "prop-types";

const FavoriteList = (props) => {
  const {offers, onOfferFocus, onOfferLeave} = props;
  const listElements = Array.from(new Set(offers.map((item) => item.city.name)));
  return (
    listElements.map((item) => {
      return (
        <li key={item} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{item}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <FavoriteCardsList offers={offers} cityName={item} onOfferFocus={onOfferFocus} onOfferLeave={onOfferLeave}/>
          </div>
        </li>
      );
    })
  );
};

FavoriteList.propTypes = {
  favoriteOffers: mainPageOffersProp,
  onOfferFocus: PropTypes.func.isRequired,
  onOfferLeave: PropTypes.func.isRequired,
};

export default FavoriteList;
