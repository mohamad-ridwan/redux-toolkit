import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './userReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import tokenReducer from './tokenReducer';

const tokenConfig = {
    key: 'token',
    storage,
}

const persistedReducer = persistReducer(tokenConfig, tokenReducer)

const rootReducer = combineReducers({
    user: userReducer,
    token: persistedReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)