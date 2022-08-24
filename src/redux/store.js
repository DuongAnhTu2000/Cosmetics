import { configureStore } from '@reduxjs/toolkit'
import cartRedux from './cartRedux'
import authRedux from './authRedux'
import userRedux from './userRedux'

export const store = configureStore({
  reducer: {
    cart: cartRedux,
    auth: authRedux,
    user: userRedux,
  },
})