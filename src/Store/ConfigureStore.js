import { createStore, combineReducers, compose } from "redux";
import Reducer from "./Reducers/Places";



let composenEnhance = compose;

if (__DEV__) {
  composenEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const RootReducer = combineReducers({
    places: Reducer
});

const configureStore = () => {
  return createStore(RootReducer,composenEnhance());
};

export default configureStore;