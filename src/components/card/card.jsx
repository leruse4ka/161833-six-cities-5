import React from "react";
import PropTypes from "prop-types";
import cardOfferProp from "./card-offer.prop";
import {StarStyle, Types} from "../../const.js";
import {Link} from "react-router-dom";

const Card = (props) => {
  const {offer, onOfferFocus, defaultType, onOfferLeave, onFavoriteClick} = props;

  const {nameClassCard, nameClassImg, nameClassInfo, width, height} = defaultType;

  const {isFavorite, price, rating, title, type, id, premium, previewImage} = offer;

  let favoriteButton = isFavorite ? `place-card__bookmark-button button place-card__bookmark-button--active` : `place-card__bookmark-button button`;
  const ratingStyle = StarStyle[Math.round(rating)];

  const mark = premium
    ? <div className="place-card__mark">
      <span>Premium</span>
    </div>
    : ``;

  const nameCard = `${nameClassCard} place-card`;
  const nameImg = `${nameClassImg}__image-wrapper place-card__image-wrapper`;

  return (
    <article
      key={id}
      className={nameCard}
      onMouseEnter={() => {
        onOfferFocus(offer);
      }}
      onMouseLeave={onOfferLeave} >
      {mark}
      <div className={nameImg}>
        <a href="">
          <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place image" />
        </a>
      </div>
      <div className={nameClassInfo ? nameClassInfo + `place-card__info` : `place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteButton} type="button" onClick={() => {

            const status = isFavorite ? 0 : 1;
            onFavoriteClick(id, status, Object.assign(offer, {isFavorite: !isFavorite}));
          }}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStyle}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{Types[type]}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  defaultType: PropTypes.shape({
    nameClassCard: PropTypes.string.isRequired,
    nameClassImg: PropTypes.string.isRequired,
    nameClassInfo: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  onOfferFocus: PropTypes.func.isRequired,
  offer: cardOfferProp,
  onOfferLeave: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

export default Card;
