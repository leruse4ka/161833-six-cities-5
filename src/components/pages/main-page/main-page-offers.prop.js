import PropTypes from "prop-types";

export default PropTypes.arrayOf(PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  bedrooms: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  inside: PropTypes.array.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  photoGallery: PropTypes.array.isRequired,
  premium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  previewImage: PropTypes.string.isRequired,
})
);
