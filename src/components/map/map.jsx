import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers, cityCord} = this.props;

    const city = cityCord;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => {
      const offerCords = offer.coordinates;
      return (
        leaflet
        .marker(offerCords, {icon})
        .addTo(map)
      );
    });
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}}></div>;
  }

}

Map.propTypes = {
  cityCord: PropTypes.array.isRequired,
  offers: mainPageOffersProp,
  limitCount: PropTypes.bool.isRequired,
};

export default Map;
