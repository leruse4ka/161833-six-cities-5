import {TYPE} from "./const";
import {random} from "./common";

export const features = {
  entire: TYPE[random(0, 3)],
  bedrooms: 3,
  adults: 4
};
