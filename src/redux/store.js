import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import userSlice from './userSlice'
import productSlice from './productSlice'
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    product: productSlice,
  },
})