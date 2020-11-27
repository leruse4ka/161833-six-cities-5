export const mockOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  inside: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatar: `img/1.png`,
    id: 3,
    isPro: true,
    name: `Angelina`
  },
  id: 1,
  photoGallery: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  adults: 4,
  previewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};

export const noop = () => {};

export const getMockOffers = (count) => {
  const mockOffers = Array(count)
    .fill(``)
    .map((_, index) => {
      return {
        bedrooms: 3,
        city: {
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10
          },
          name: `Amsterdam`
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        inside: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          avatar: `img/1.png`,
          id: 3,
          isPro: true,
          name: `Angelina`
        },
        id: index + 1,
        photoGallery: [`img/1.png`, `img/2.png`],
        isFavorite: false,
        premium: false,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        },
        adults: 4,
        previewImage: `img/1.png`,
        price: 120,
        rating: 4.8,
        title: `Beautiful & luxurious studio at great location`,
        type: `apartment`
      };
    });

  return mockOffers;
};

export const commentsMock = [
  {
    comment: `Comment`,
    date: `2020-10-30T19:03:49.647Z`,
    id: 1,
    rating: 3,
    user: {
      avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
      id: 13,
      isPro: false,
      name: `La`,
    }
  },
  {
    comment: `Comment`,
    date: `2020-10-30T19:03:49.647Z`,
    id: 2,
    rating: 5,
    user: {
      avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
      id: 12,
      isPro: false,
      name: `ABC`,
    }
  },
];

export const loginDataMock = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

export const adaptedLoginDataMock = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};
