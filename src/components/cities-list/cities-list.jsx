import React from "react";
import PropTypes from "prop-types";
import {CITIES} from "../../const";

const CitiesList = (props) => {
  const {cityName, onCityClick} = props;

  return CITIES.map((city) => {
    const activeCity = city === cityName ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`;
    return (
      <li key={city} className="locations__item">
        <a onClick={onCityClick} className={activeCity} href="#">
          <span>{city}</span>
        </a>
      </li>
    );
  });
};

CitiesList.propTypes = {
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
