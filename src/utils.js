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

export const adaptToClient = (offer) => {
  const adaptedHost = Object.assign({},
      offer.host, {
        avatar: offer.host.avatar_url,
        isPro: offer.host.is_pro,
      }
  );

  delete adaptedHost.avatar_url;
  delete adaptedHost.is_pro;

  const adaptedOffer = Object.assign({},
      offer, {
        adults: offer.max_adults,
        inside: offer.goods,
        host: adaptedHost,
        isFavorite: offer.is_favorite,
        premium: offer.is_premium,
        photoGallery: offer.images,
        previewImage: offer.preview_image,
      }
  );

  delete adaptedOffer.max_adults;
  delete adaptedOffer.goods;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.images;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptToClientComments = (comment) => {
  const adaptedUser = Object.assign({},
      comment.user, {
        avatar: comment.user.avatar_url,
        isPro: comment.user.is_pro,
      }
  );

  delete adaptedUser.avatar_url;
  delete adaptedUser.is_pro;

  const adaptedComment = Object.assign({},
      comment, {
        user: adaptedUser
      }
  );


  return adaptedComment;
};

export const adaptToServer = (offer) => {
  const adaptedHost = Object.assign({},
      offer.host, {
        "avatar_url": offer.host.avatar,
        "is_pro": offer.host.isPro,
      }
  );

  delete adaptedHost.avatar;
  delete adaptedHost.isPro;

  const adaptedOffer = Object.assign({},
      offer, {
        "max_adults": offer.adults,
        "goods": offer.inside,
        "host": {
          "avatar_url": offer.host.avatar
        },
        "is_favorite": offer.isFavorite,
        "is_premium": offer.premium,
        "images": offer.photoGallery,
        "preview_image": offer.previewImage,
      }
  );

  delete adaptedOffer.adults;
  delete adaptedOffer.inside;
  delete adaptedOffer.host.avatar;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.premium;
  delete adaptedOffer.photoGallery;
  delete adaptedOffer.previewImage;

  return adaptedOffer;
};
