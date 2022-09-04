import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import authSlice from './authSlice'
import userSlice from './userSlice'
import productSlice from './productSlice'
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    user: userSlice,
    product: productSlice,
  },
})