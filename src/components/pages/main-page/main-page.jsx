import React from "react";
import PropTypes from "prop-types";
import CardsList from "../../cards-list/cards-list";
import Map from "../../map/map";
import mainPageOffersProp from "./main-page-offers.prop";
import {connect} from "react-redux";
import CitiesList from "../../cities-list/cities-list";
import {ActionCreator} from "../../../store/action";
import Sorts from "../../sorts/sorts";
import {sorting} from "../../../sorting";
import withSorts from "../../../hocs/with-sorts/with-sorts";
import Header from "../../header/header";

const SortsWrapped = withSorts(Sorts);

const MainPage = (props) => {
  const {offers, activeId, cityName, onCityClick} = props;

  const countRent = offers ? offers.length : 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList cityName={cityName} onCityClick={onCityClick} />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countRent} places to stay in {cityName} </b>
              <SortsWrapped offers={offers} />
              <CardsList offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} cityCord={[52.38333, 4.9]} activeId={activeId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: mainPageOffersProp,
  cityName: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  activeId: PropTypes.number,
};

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  currentSort: state.currentSort,
  offers: sorting(state.currentSort, Array.from(state.offers.slice().filter((item) => item.city.name === state.cityName))),
  activeId: state.activeId,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt) {
    dispatch(ActionCreator.changeCity(evt));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
