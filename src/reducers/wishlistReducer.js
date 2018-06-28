import { WISHLIST_OPEN } from '../actions/prodActions';

export default function wishlistReducer(state = false, action) {

  switch (action.type) {
    case WISHLIST_OPEN:
      return state ? false : true;
    default:
      return state;
  }
}