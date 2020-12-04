import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    totalPrice: 0,
  },

  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },

    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    update: (state) => {
      state.totalPrice = state.items.reduce(
        (amount, product) => product.price + amount,
        0
      );
    },
  },
});

export const { add, update, remove } = basketSlice.actions;

export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
