import { createStore, combineReducers } from "redux";
import { playlist, songReducer } from "../Reducers/songReducer";
const rootReducer = combineReducers(playlist, songReducer);
const store = createStore(rootReducer);

export default store;
