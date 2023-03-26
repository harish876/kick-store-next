import { configureStore } from '@reduxjs/toolkit';
import { cartReducer,signalReducer } from './cart.slice';

let reducer = {
  cart: cartReducer,
  signal: signalReducer
};

const store = configureStore({
  reducer,
});

export default store;