import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardsList from "../../cards-list/cards-list";
import Map from "../../map/map";
import mainPageOffersProp from "./main-page-offers.prop";
import {connect} from "react-redux";
import CitiesList from "../../cities-list/cities-list";
import {ActionCreator} from "../../../store/action";
import Sorts from "../../sorts/sorts";
import withSorts from "../../../hocs/with-sorts/with-sorts";
import Header from "../../header/header";
import MainEmpty from "../../main-empty/main-empty";
import {getFilterOffers} from "../../../store/selectors";
import {getCity} from "../../../utils";
import {fetchOffersList} from "../../../store/api-actions";

const SortsWrapped = withSorts(Sorts);

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getOffers} = this.props;
    getOffers();
  }

  render() {
    const {offers, activeId, cityName, onCityClick} = this.props;

    const city = getCity(offers);

    const countRent = offers ? offers.length : 0;

    const mainClass = offers.length ? `page__main page__main--index` : `page__main page__main--index page__main--index-empty`;

    return (
      <div className="page page--gray page--main">
        <Header />
        <main className={mainClass}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <CitiesList cityName={cityName} onCityClick={onCityClick} />
              </ul>
            </section>
          </div>
          <div className="cities">
            {offers.length ? <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{countRent} places to stay in {cityName} </b>
                <SortsWrapped offers={offers} />
                <CardsList offers={offers} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} cityCord={city.location} activeId={activeId} />
                </section>
              </div>
            </div> : <MainEmpty cityName={cityName}/>}
          </div>
        </main>
      </div>
    );
  }

}

MainPage.propTypes = {
  offers: mainPageOffersProp,
  cityName: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  activeId: PropTypes.number,
  getOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cityName: state.STATUS.cityName,
  currentSort: state.STATUS.currentSort,
  offers: getFilterOffers(state),
  activeId: state.STATUS.activeId,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt) {
    dispatch(ActionCreator.changeCity(evt));
  },
  getOffers() {
    dispatch(fetchOffersList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
