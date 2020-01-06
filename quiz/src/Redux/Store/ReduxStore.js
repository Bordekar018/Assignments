import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SurveyReducer } from "../Reducer/SurveyReducer";

let rootReducer = combineReducers({ SurveyQuestion: SurveyReducer });
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
