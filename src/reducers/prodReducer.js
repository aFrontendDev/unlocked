import { PROD_OPEN } from '../actions/prodActions';

export default function prodReducer(state = false, action) {

  switch (action.type) {
    case PROD_OPEN:
      return state ? false : true;
    default:
      return state;
  }
}