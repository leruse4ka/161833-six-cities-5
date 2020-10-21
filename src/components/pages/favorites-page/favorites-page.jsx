import React from "react";
import PropTypes from "prop-types";
import FavoriteList from "../../favorite-list/favorite-list";
import {Link} from "react-router-dom";

const FavoritesPage = (props) => {
  const {offers} = props;

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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
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
              <FavoriteList offers={offers} />
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

export default FavoritesPage;
