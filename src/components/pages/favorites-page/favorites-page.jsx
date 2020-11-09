import React from "react";
import mainPageOffersProp from "../main-page/main-page-offers.prop";
import FavoriteList from "../../favorite-list/favorite-list";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../../store/action";

const FavoritesPage = (props) => {
  const {offers, onOfferFocus, onOfferLeave} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteList offers={offers} onOfferFocus={onOfferFocus} onOfferLeave={onOfferLeave}/>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: mainPageOffersProp,
  onOfferFocus: PropTypes.func.isRequired,
  onOfferLeave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers.filter((item) => item.isFavorite),
});

const mapDispatchToProps = (dispatch) => ({
  onOfferFocus(offer) {
    dispatch(ActionCreator.focusActiveId(offer));
  },
  onOfferLeave() {
    dispatch(ActionCreator.resetActiveId());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
