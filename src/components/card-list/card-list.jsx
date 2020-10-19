import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";

class CardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: {},
    };
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <React.Fragment key={offer.id}>
              <Card
                offer={offer}
                nameClassCard={`cities__place-card`}
                nameClassImg={`cities`}
                activeOfferHandler={() => {
                  this.setState(() => ({
                    activeOffer: offer
                  }));
                }} />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

CardList.propTypes = {
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

export default CardList;
