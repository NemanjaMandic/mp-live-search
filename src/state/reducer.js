import { combineReducers } from "redux";
import news from "./news/reducer";

const rootReducer = combineReducers({
  news
});

export default rootReducer;
