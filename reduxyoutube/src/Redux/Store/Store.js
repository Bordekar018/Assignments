import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const RootReducer = combineReducers({
  form: formReducer
});

const store = createStore(RootReducer);

export default store;
