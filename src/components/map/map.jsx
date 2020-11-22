import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = ``;
    this.layer = ``;
    this.markers = [];
  }

  componentDidMount() {
    const {offers, cityCord, activeId} = this.props;

    const {latitude, longitude, zoom} = cityCord;

    const location = Array.of(latitude, longitude);

    this.map = leaflet.map(`map`, {
      center: location,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(location, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.renderPins(offers, activeId);
  }

  renderPins(offers, activeId) {
    this.markers = [];

    let icon;

    offers.forEach((offer) => {
      const {latitude, longitude, zoom} = offer.location;
      const offerCords = Array.of(latitude, longitude);
      const id = offer.id;
      let activeIcon = id === activeId ? `img/pin-active.svg` : `img/pin.svg`;
      icon = leaflet.icon({
        iconUrl: activeIcon,
        iconSize: [30, 30],
        zoom
      });

      let marker =
        leaflet
        .marker(offerCords, {icon});
      marker.id = id;
      this.markers.push(marker);
    });

    if (this.layer) {
      this.map.removeLayer(this.layer);
    }

    this.layer = leaflet.featureGroup(this.markers).addTo(this.map);
  }

  componentDidUpdate() {
    this.renderPins(this.props.offers, this.props.activeId);
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}}></div>;
  }

}

Map.propTypes = {
  cityCord: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  offers: mainPageOffersProp,
  activeId: PropTypes.number,
};

export default Map;
