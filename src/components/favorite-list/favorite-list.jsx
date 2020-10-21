import React from "react";
import {Cities} from "../../const";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import FavoriteCardList from "../favorite-card-list/favorite-card-list";


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
                <span>{Cities[item]}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <FavoriteCardList offers={offers} cityName={item} />
          </div>
        </li>
      );
    })
  );
};

FavoriteList.propTypes = {
  offers: mainPageOffersProp,
};

export default FavoriteList;
