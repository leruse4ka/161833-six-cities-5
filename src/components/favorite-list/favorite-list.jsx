import React from "react";
import {Cities} from "../../const";
import PropTypes from "prop-types";
import FavoriteListItem from "../favorite-list-item/favorite-list-item";


const FavoriteList = (props) => {
  const {offers} = props;
  const listElements = Array.from(new Set(offers.map((item) => item.city)));
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
            {offers
              .filter((offer) => offer.city === item)
              .map((el) => <FavoriteListItem offer={el} key={el.id}/>)}
          </div>
        </li>
      );
    })
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    features: PropTypes.shape({
      adults: PropTypes.number.isRequired,
      bedrooms: PropTypes.number.isRequired,
      entire: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    inside: PropTypes.array.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    meetHost: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    photoGallery: PropTypes.arrayOf(PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })).isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
  })
  )
};

export default FavoriteList;
