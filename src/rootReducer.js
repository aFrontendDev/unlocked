import { combineReducers } from "redux";
import menuReducer from "./reducers/menuReducer";
import prodReducer from "./reducers/prodReducer";
import wishlistReducer from "./reducers/wishlistReducer";
import overlayReducer from "./reducers/overlayReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  prodOverlay: prodReducer,
  wishlistOverlay: wishlistReducer,
  overlay: overlayReducer
});

export default rootReducer;