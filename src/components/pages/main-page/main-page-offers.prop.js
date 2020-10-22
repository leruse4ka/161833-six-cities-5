import PropTypes from "prop-types";

export default PropTypes.arrayOf(PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinatesCity: PropTypes.array.isRequired,
  }).isRequired,
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
  coordinates: PropTypes.array.isRequired,
})
);
