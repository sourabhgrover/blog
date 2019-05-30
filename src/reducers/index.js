import { combineReducers } from "redux";
import postReducer from "./postReducers";
import userReducer from "./userReducers";

export default combineReducers({
  post: postReducer,
  user: userReducer
});
