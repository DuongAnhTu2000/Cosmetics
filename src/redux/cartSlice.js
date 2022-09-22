import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
console.log({ items })
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
      let itemList = JSON.parse(localStorage.getItem('cartItems')) || []
      // Kiem tra san pham co ton tai trong cart
      const matchItemIndex = itemList?.findIndex(item => item.id === action.payload.id)
      console.log('matchItemIndex,itemList', matchItemIndex, itemList)
      // Neu san pham khong co trong cart thi tao moi
      if (matchItemIndex === -1) {
        itemList.push(action.payload)
      }
      // Neu san pham da ton tai thi cap nhat so luong
      else {
        itemList[matchItemIndex].count += +action.payload.count
      }
      state.products = itemList
      // setNumber(itemlist)
      localStorage.setItem("cartItems", JSON.stringify(itemList));
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter((item) => item.id !== action.payload);
      state.products = removeItem;
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      return state
    },
    decreaseQuantity: (state, action) => {
      const newItemList = state.products.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (item.count < 1) {
            return
          } else if (item.count < 0) {
            state.products = removeItem;

          }
          item.count -= 1
          item.totalPrice = item.count * item.price
        }
      })
      console.log("newItemList", newItemList)
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
    increaseQuantity: (state, action) => {
      console.log("action", action)
      const newItemList = state.products.forEach((item, index) => {

        if (item.id === action.payload.id) {
          item.count += 1
          item.totalPrice = item.count * item.price
        }
      })

      console.log("newItemList", newItemList)
    },
  },

})

export const { addtoCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  getToCart,
} = cartSlice.actions;
export default cartSlice.reducer;