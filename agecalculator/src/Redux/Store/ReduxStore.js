import { combineReducers, createStore, applyMiddleware } from "redux";
import { yearReducer } from "../Reducer/calculateReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({ Year: yearReducer });
let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
