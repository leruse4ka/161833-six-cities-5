import React, {PureComponent} from "react";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";
import PropTypes from "prop-types";

class CardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this.handleOfferFocus = this.handleOfferFocus.bind(this);
  }

  handleOfferFocus(offer) {

    this.setState(() => ({
      activeOffer: offer.id
    }));
  }

  render() {
    const {offers, classNames, typeCard} = this.props;
    return (
      <div className={classNames + ` places__list`}>
        {offers.map((offer) => {
          return (
            <React.Fragment key={offer.id}>
              <Card
                offer={offer}
                activeOfferHandler={this.handleOfferFocus}
                typeCard={typeCard} />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

CardList.defaultProps = {
  classNames: `cities__places-list tabs__content`,
  typeCard: {
    nameClassCard: `cities__place-card`,
    nameClassImg: `cities`,
    nameClassInfo: ``,
    width: 260,
    height: 200,
  },
};

CardList.propTypes = {
  offers: mainPageOffersProp,
  classNames: PropTypes.string.isRequired,
  typeCard: PropTypes.shape({
    nameClassCard: PropTypes.string.isRequired,
    nameClassImg: PropTypes.string.isRequired,
    nameClassInfo: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  })
};

export default CardList;
