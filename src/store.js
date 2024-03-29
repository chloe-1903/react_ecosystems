import { createStore, combineReducers, applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { todos } from "./todos/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
    todos
}

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2

}

const rootReducer = combineReducers(reducers);

const persitedReducer = persistReducer(persistConfig, rootReducer)

// using deprecated createStore to follow the tutorial
export const configureStore = () => createStore(
    persitedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
