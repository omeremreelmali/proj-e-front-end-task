import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../store/cart/cartSlice'
export default configureStore({
  reducer: {
    cart:cartSlice
  },
})