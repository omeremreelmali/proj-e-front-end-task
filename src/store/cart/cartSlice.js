import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItemCount: 0,
  },
  reducers: {
    addCart: (state) => {
      state.cartItemCount += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCart } = cartSlice.actions

export default cartSlice.reducer