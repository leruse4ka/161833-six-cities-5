import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {StarStyle, Types} from "../../const.js";

class Card extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {offer, activeOfferHandler, nameClassCard, nameClassImg} = this.props;

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
            <img className="place-card__image" src={photoGallery[0].src} width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
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
  activeOfferHandler: PropTypes.func.isRequired,
  offer: PropTypes.shape({
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
};

export default Card;
