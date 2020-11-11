import React from "react";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import FavoriteCardsList from "../favorite-cards-list/favorite-cards-list";

const FavoriteList = (props) => {
  const {offers} = props;
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
            <FavoriteCardsList offers={offers} cityName={item} />
          </div>
        </li>
      );
    })
  );
};

FavoriteList.propTypes = {
  favoriteOffers: mainPageOffersProp,
};

export default FavoriteList;
