const CITIES = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];
const SORT_TYPES = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const StarStyle = {
  0: 0 + `%`,
  1: 20 + `%`,
  2: 40 + `%`,
  3: 60 + `%`,
  4: 80 + `%`,
  5: 100 + `%`,
};

const SortType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

const Types = {
  apartment: `Apartment`,
  room: `Private room`,
  house: `House`,
  hotel: `Hotel`
};

const Stars = {
  5: `5-stars`,
  4: `4-stars`,
  3: `3-stars`,
  2: `2-stars`,
  1: `1-star`,
};

const DefaultType = {
  favorites: {
    nameClassCard: `favorites__card`,
    nameClassImg: `favorites`,
    nameClassInfo: `favorites__card-info `,
    width: 150,
    height: 110,
  },
  property: {
    nameClassCard: `near-places__card`,
    nameClassImg: `near-places`,
    nameClassInfo: ``,
    width: 260,
    height: 200,
  },
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export {StarStyle, Types, CITIES, Stars, DefaultType, SORT_TYPES, SortType, AuthorizationStatus};
