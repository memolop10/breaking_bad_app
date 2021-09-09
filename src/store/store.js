import { createStore, combineReducers } from "redux";
import { episodesReducer } from "../reducers/episodesReducer";

const reducers = combineReducers({
    episodes: episodesReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);