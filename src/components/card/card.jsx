import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import cardOfferProp from "./card-offer.prop";
import {StarStyle, Types} from "../../const.js";

class Card extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {offer, activeOfferHandler, nameClassCard, nameClassImg, nameClassInfo, width = `260`, height = `200`} = this.props;

    const {isFavorite, photoGallery, price, rating, title, features, id, premium} = offer;

    let favoriteButton = `place-card__bookmark-button button`;
    const ratingStyle = StarStyle[rating];

    if (isFavorite) {
      favoriteButton += ` place-card__bookmark-button--active`;
    }

    const mark = premium
      ? <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : ``;

    const nameCard = `${nameClassCard} place-card`;
    const nameImg = `${nameClassImg}__image-wrapper place-card__image-wrapper`;

    return (
      <article key={id} className={nameCard} onMouseEnter={(evt) => {
        evt.preventDefault();
        activeOfferHandler(offer);
      }}>
        {mark}
        <div className={nameImg}>
          <Link to="/offer/:id">
            <img className="place-card__image" src={photoGallery[0].src} width={width} height={height} alt="Place image" />
          </Link>
        </div>
        <div className={nameClassInfo ? nameClassInfo + `place-card__info` : `place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={favoriteButton} type="button">
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
            <Link to="/offer/:id">{title}</Link>
          </h2>
          <p className="place-card__type">{Types[features.entire]}</p>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  nameClassCard: PropTypes.string.isRequired,
  nameClassImg: PropTypes.string.isRequired,
  nameClassInfo: PropTypes.string.isRequired,
  activeOfferHandler: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  offer: cardOfferProp,
};

export default Card;
