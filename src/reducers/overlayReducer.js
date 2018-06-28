import { OVERLAY_OPEN } from '../actions/overlayActions';

export default function overlayReducer(state = false, action) {

  switch (action.type) {
    case OVERLAY_OPEN:
      return state ? false : true;
    default:
      return state;
  }
}