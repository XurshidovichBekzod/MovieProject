import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average: number
}

interface WishlistState {
  value: Movie[]
}

const initialState: WishlistState = {
  value: []
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Movie>) => {
      const exists = state.value.find(m => m.id === action.payload.id)
      if (exists) {
        state.value = state.value.filter(m => m.id !== action.payload.id)
      } else {
        state.value.push(action.payload)
      }
    }
  }
})

export const { toggleWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
