import {features} from "./features";
import {photoGallery} from "./photo-gallery";
import {meetHost} from "./meet-host";
import {reviews} from "./reviews";
import {INSIDE, TITLE} from "./const";
import {random} from "./common";

const COUNT = 4;

const generateOffer = () => {
  return {
    title: TITLE[random(0, 3)],
    city: `amsterdam`,
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
  };
};

const generateOffers = (amount) => {
  return Array(amount)
    .fill(``)
    .map((_) => generateOffer());
};

const offers = generateOffers(COUNT);
export {offers};
