const random = (a = 100, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return Math.floor(lower + Math.random() * (upper - lower));
};

const getRandomDate = () => {
  return (
    Date.now() +
    1 +
    Math.floor(Math.random() * 7) * 24 * random(0, 60) * 60 * 1000
  );
};

export {random, getRandomDate};
