import {features} from "./features";
import {photoGallery} from "./photo-gallery";
import {meetHost} from "./meet-host";
import {reviews} from "./reviews";
import {INSIDE, TITLE} from "./const";
import {random} from "./common";

const COUNT = 4;

const COORD_X = [`52.3909553943508`, `52.369553943508`, `52.3909553943508`, `52.3809553943508`];
const COORD_Y = [`4.85309666406198`, `4.85309666406198`, `4.929309666406198`, `4.939309666406198`];

const generateOffer = () => {
  return {
    title: TITLE[random(0, 3)],
    city: {
      name: `amsterdam`,
      coordinatesCity: [52.38333, 4.9],
    },
    premium: Boolean(Math.round(Math.random())),
    rating: random(1, 5),
    price: random(0, 1000),
    inside: INSIDE,
    features,
    photoGallery,
    meetHost,
    reviews,
    isFavorite: Boolean(Math.round(Math.random())),
    id: random(),
    coordinates: [COORD_X[random(0, 3)], COORD_Y[random(0, 3)]],
  };
};

const generateOffers = (amount) => {
  return Array(amount)
    .fill(``)
    .map((_) => generateOffer());
};

const offers = generateOffers(COUNT);
export {offers};
