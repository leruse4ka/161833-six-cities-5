import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = ``;
    this.layer = ``;
  }

  componentDidMount() {
    const {offers, cityCord} = this.props;

    const city = cityCord;

    const zoom = 12;

    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.renderPins(offers);
  }

  renderPins(offers) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    let markers = [];

    offers.forEach((offer) => {
      const offerCords = offer.coordinates;
      let marker =
        leaflet
        .marker(offerCords, {icon});
      markers.push(marker);
    });

    if (this.layer) {
      this.map.removeLayer(this.layer);
    }

    this.layer = leaflet.featureGroup(markers).addTo(this.map);
  }

  componentDidUpdate(prevOffers) {
    this.renderPins(this.props.offers, prevOffers.offers);
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}}></div>;
  }

}

Map.propTypes = {
  cityCord: PropTypes.array.isRequired,
  offers: mainPageOffersProp,
};

export default Map;
