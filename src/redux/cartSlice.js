import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addtoCart: (state, action) => {
      console.log("them san pham:", action.payload)
      console.log("state: ", state.quantity)
      state.products.push(action.payload);
      state.quantity += action.payload.count;
      console.log("add", action.payload.count)
      
      state.total += action.payload.price * action.payload.quantity;
      localStorage.setItem("state", JSON.stringify({
        products: state.products,
        quantity: state.quantity,
        totalPrice: state.totalPrice,
      }))
    },
    getToCart: (state, action) => {

    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.products = state.products.filter((item) => item.id !== itemId);
    },
    quantity: (state, action) => {
      let cartCount = state.products.reduce((total, item) => {
        return item.quantity + total
      }, 0)
      state.quantity = cartCount
      const dataLocal = localStorage.getItem("state");
      const item = JSON.parse(dataLocal)
      console.log(item);
      console.log("tinh tong: ", action.payload);
    },
    decreaseQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      state.amount = state.amount - 1;
    },
    increaseQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      state.amount = state.amount - 1;
    },
    totalPrice: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },

})

export const { addtoCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  removeItem,
  quantity,
  getToCart,
  totalPrice
} = cartSlice.actions;
export default cartSlice.reducer;