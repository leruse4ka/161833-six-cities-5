import {DESCRIPTION} from "./const";
import {getRandomDate} from "./common";


const date = getRandomDate();

export const reviews = [
  {
    name: `Max`,
    avatar: `https://picsum.photos/54/54`,
    rating: 3,
    description: DESCRIPTION[0],
    date,
  }
];
