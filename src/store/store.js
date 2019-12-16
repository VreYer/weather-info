import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./weather/weather.reducer";

// Here we are combining all reducers
// reducer using `combinereducers` function.
const rootReducer = combineReducers({weather: weatherReducer });

// Store object is managed by `redux-thunk`. This is now `redux-thunk` actions
// that change application state.
const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
);


export { store };