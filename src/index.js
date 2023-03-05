import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.js';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/lib/integration/react';

const store = configureStore();
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate
            loading={<p>Loading...</p>}
            persistor={persistor}
        >
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </PersistGate>
    </Provider>
);