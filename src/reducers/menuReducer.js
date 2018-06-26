import { MENU_OPEN } from '../actions/menuActions';

export default function menuReducer(state = false, action) {

  switch (action.type) {
    case MENU_OPEN:
      return state ? false : true;
    default:
      return state;
  }
}