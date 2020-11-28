import React from "react";
import cardOfferProp from "../../card/card-offer.prop";
import mainPageOffersProp from "../main-page/main-page-offers.prop";
import {StarStyle, Types, DefaultType} from "../../../const.js";
import ReviewForm from "../../review-form/review-form.jsx";
import ReviewList from "../../review-list/review-list";
import Map from "../../map/map";
import CardsList from "../../cards-list/cards-list";
import PropTypes from "prop-types";
import Header from "../../header/header";
import propertyPageCommentsProp from "./property-page-comments.prop";
import {AuthorizationStatus} from "../../../const";
import {getMapOffers} from "../../../utils";

const MAX_COMMENTS = 10;

const PropertyPageContent = (props) => {
  const {offer, offersNearby, comments, authorizationStatus, onFavoriteClick} = props;
  const {
    photoGallery,
    premium,
    title,
    rating,
    isFavorite,
    bedrooms,
    adults,
    type,
    price,
    inside,
    host,
    description,
    city,
    id
  } = offer;

  const favoriteButton = isFavorite ? `property__bookmark-button button property__bookmark-button--active` : `property__bookmark-button button`;
  const ratingStyle = StarStyle[Math.round(rating)];
  const mapOffers = getMapOffers(offersNearby, offer);
  const viewComments = comments.slice(0, MAX_COMMENTS);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photoGallery.map((photo, i) => {
                return (
                  <div key={photo + `${i}`} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photo studio" />
                  </div>
                );
              })}
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
                <button className={favoriteButton} type="button" onClick={(evt) => {
                  evt.preventDefault();
                  const status = isFavorite ? 0 : 1;
                  onFavoriteClick(offer.id, status, Object.assign(offer, {isFavorite: !isFavorite}));
                }}>
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
                  {Types[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {inside.map((item) => {
                    return (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewList comments={viewComments} />
                {authorizationStatus === AuthorizationStatus.NO_AUTH
                  ? ``
                  : <ReviewForm id={offer.id}/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={mapOffers} cityCord={city.location} activeId={id} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <CardsList
              offers={offersNearby}
              classNames={`near-places__list`}
              typeCard={DefaultType.property}
            />

          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPageContent.propTypes = {
  offer: cardOfferProp,
  offersNearby: mainPageOffersProp,
  comments: propertyPageCommentsProp,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  id: PropTypes.number
};

export default PropertyPageContent;
