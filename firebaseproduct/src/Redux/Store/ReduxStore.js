import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { FetchAuthReducer } from "../Reducer/ProductReducer";

let rootReducer = combineReducers({ FetchedAuthData: FetchAuthReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
