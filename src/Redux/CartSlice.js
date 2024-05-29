import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      let existsItem = state.cart.find((e) => e.id === action.payload.id);
      if (existsItem) {
        console.log("exists");
        state.cart[state.cart.indexOf(existsItem)].qt++;
      } else {
        state.cart.push({ ...action.payload, qt: 1 });
      }

      const totals = calculateTotal(state.cart);
      state.totalPrice = totals.totalPrice;
      state.totalQuantity = totals.totalQuantity;
    },

    increaseQuantity: (state, action) => {
        let item = state.cart.find((e) => e.id === action.payload.id);
        if (item) {
          item.qt++;
        }
  
        const totals = calculateTotal(state.cart);
        state.totalPrice = totals.totalPrice;
        state.totalQuantity = totals.totalQuantity;
      },

      decreaseQuantity: (state, action) => {
        let item = state.cart.find((e) => e.id === action.payload.id);
        if (item && item.qt > 1) {
          item.qt--;
        }
  
        const totals = calculateTotal(state.cart);
        state.totalPrice = totals.totalPrice;
        state.totalQuantity = totals.totalQuantity;
      },

      removeItemIfQuantityIsOne: (state, action) => {
        const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
        if (itemIndex !== -1 && state.cart[itemIndex].qt === 1) {
          state.cart.splice(itemIndex, 1);
        }
  
        const totals = calculateTotal(state.cart);
        state.totalPrice = totals.totalPrice;
        state.totalQuantity = totals.totalQuantity;
      },
  },
});

export const { addToCart, removeFromCart, resetCart, increaseQuantity, decreaseQuantity, deleteQuantity, removeItemIfQuantityIsOne } = cartSlice.actions;
export default cartSlice.reducer;

export function calculateTotal(items) {
  let totalPrice = 0;
  let totalQuantity = 0;

  items.map((item) => {
    totalPrice += item.price * item.qt;
    totalQuantity += item.qt;
  });

  return {
    totalPrice,
    totalQuantity,
  };
}
