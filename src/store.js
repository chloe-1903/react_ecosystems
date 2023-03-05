import { createStore, combineReducers } from "redux";
// using deprecated createStore to follow the tutorial
import { todos } from "./todos/reducers";

const reducers = {todos}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
