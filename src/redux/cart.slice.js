import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(
        (item) => item.clientId === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.clientId === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.clientId === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex(
          (item) => item.clientId === action.payload
        );
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.clientId === action.payload);
      state.splice(index, 1);
    },
  },
});

const signalSlice = createSlice({
  name: "signal",
  initialState: [],
  reducers: {
    updateSignal: (state, action) => {
      state.push("State Change");
      console.log(state, action);
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const signalReducer = signalSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export const { updateSignal } = signalSlice.actions;
