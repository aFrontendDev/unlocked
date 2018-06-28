
export const PROD_OPEN = "PROD_OPEN";
export const prodOpenAction = (prodIn) => ({
  type: PROD_OPEN,
  prodIsIn: prodIn
});

export const WISHLIST_OPEN = "WISHLIST_OPEN";
export const wishlistOpenAction = (wishlistIn) => ({
  type: WISHLIST_OPEN,
  wishlistIsIn: wishlistIn
});

