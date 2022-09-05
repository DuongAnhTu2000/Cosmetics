import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const initialState = {
  products: items,
  quantity: items?.length ?? 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addtoCart: (state, action) => {
      console.log("them san pham:", action.payload)
      console.log("state: ", state.quantity)
      // state.products = [...state.products, action.payload]
      state.products.push(action.payload);
      state.quantity += action.payload.count;
      console.log("add", action.payload.count)

      state.totalPrice += action.payload.totalPrice * action.payload.quantity;
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter((item) => item.id !== action.payload);
      state.products = removeItem;
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      return state;
    },
    quantity: (state, action) => {
      let cartCount = state.products.reduce((total, item) => {
        return item.quantity + total
      }, 0)
      state.quantity = cartCount
      const dataLocal = localStorage.getItem("cartItems");
      const item = JSON.parse(dataLocal)
      console.log(item);
      console.log("tinh tong: ", action.payload);
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
    increaseQuantity: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload.id);
      item.quantity = +1;
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