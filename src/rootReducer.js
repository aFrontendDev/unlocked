import { combineReducers } from "redux";
import menuReducer from "./reducers/menuReducer";

const rootReducer = combineReducers({
  menu: menuReducer
});

export default rootReducer;