import React from "react";
import PropTypes from "prop-types";
import {StarStyle, Types, Cities} from "../../../const";
import {Link} from "react-router-dom";

const FavoritesPage = (props) => {
  const {offers} = props;

  const listElements = Array.from(new Set(offers.map((item) => item.city)));

  const getElements = (item) => {
    const ratingStyle = StarStyle[item.rating];
    if (item.isFavorite) {
      return (
        <article key={item.id} className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to="/offer/id:">
              <img className="place-card__image" src={item.photoGallery[0].src} width="150" height="110" alt={item.photoGallery[0].alt} />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{item.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: ratingStyle}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to="/offer/id:">{item.title}</Link>
            </h2>
            <p className="place-card__type">{Types[item.features.entire]}</p>
          </div>
        </article>
      );
    }
    return false;
  };

  const getListElements = listElements.map((item) => {
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
              .map((el) => getElements(el))}
        </div>
      </li>
    );
  });

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
              {getListElements}
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
