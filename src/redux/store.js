import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Custom middleware for saving Redux state to local storage
const saveToLocalStorage = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    return result;
};

// Custom middleware for rehydrating Redux state from local storage
const rehydrateFromLocalStorage = () => {
    const persistedState = JSON.parse(localStorage.getItem('reduxState'));
    return persistedState ? { ...persistedState } : undefined;
};

const store = configureStore({
    reducer: persistedReducer,
    preloadedState: rehydrateFromLocalStorage(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveToLocalStorage),
});

export default store;
