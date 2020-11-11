export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sortLowToHigh = (a, b) => {
  return (a.price - b.price);
};

export const sortHightToLow = (a, b) => {
  return (b.price - a.price);
};

export const sortRating = (a, b) => {
  return (b.rating - a.rating);
};
