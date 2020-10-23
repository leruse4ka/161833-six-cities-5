import React from "react";
import mainPageOffersProp from "../main-page/main-page-offers.prop";
import {StarStyle, Types, DefaultType} from "../../../const.js";
import ReviewForm from "../../review-form/review-form.jsx";
import {Link} from "react-router-dom";
import ReviewList from "../../review-list/review-list";
import Map from "../../map/map";
import CardsList from "../../cards-list/cards-list";

const MAX_COUNT = 3;

const PropertyPage = (props) => {
  const {offers} = props;
  const offer = offers[0];
  const {
    photoGallery,
    premium,
    title,
    rating,
    isFavorite,
    features,
    price,
    inside,
    meetHost,
    reviews,
  } = offer;

  let favoriteButton = `property__bookmark-button button`;
  const ratingStyle = StarStyle[rating];

  if (isFavorite) {
    favoriteButton += ` property__bookmark-button--active`;
  }

  const getPhotos = photoGallery.map((photo, i) => {
    return (
      <div key={photo.src + `${i}`} className="property__image-wrapper">
        <img className="property__image" src={photo.src} alt={photo.alt}/>
      </div>
    );
  });

  const insides = inside.map((item) => {
    return (
      <li key={item} className="property__inside-item">
        {item}
      </li>
    );
  });

  const cards = offers.slice(0, MAX_COUNT);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {getPhotos}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium
                ? <div className="property__mark">
                  <span>Premium</span>
                </div>
                : false}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={favoriteButton} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingStyle}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {Types[features.entire]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {features.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {features.adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {insides}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={meetHost.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {meetHost.name}
                  </span>
                </div>
                <div className="property__description">
                  {meetHost.description.map((item) => {
                    return (
                      <p key={item} className="property__text">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={cards} cityCord={[52.38333, 4.9]}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <CardsList
              offers={cards}
              classNames={`near-places__list`}
              typeCard={DefaultType.property}
            />

          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  offers: mainPageOffersProp,
};

export default PropertyPage;
