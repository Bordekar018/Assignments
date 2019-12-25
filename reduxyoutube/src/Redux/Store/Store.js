import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "../Reducer/YoutubeAPIReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  videolist: reducer
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
