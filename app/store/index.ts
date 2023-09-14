import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import cartReducer from './slices/cart.slice';

const rootReducer = combineReducers({
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
