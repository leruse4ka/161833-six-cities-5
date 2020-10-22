import React, {PureComponent} from "react";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";
import Card from "../card/card";

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
                nameClassInfo={``}
                width={`260`}
                height={`200`}
                activeOfferHandler={this.handleOfferFocus} />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

CardList.propTypes = {
  offers: mainPageOffersProp,
};

export default CardList;
