import { createSlice } from '@reduxjs/toolkit'
import produce from "immer";



export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return produce(state, (draftState) => {
        draftState.value += 1;
      });
    },
    decrement: (state) => {
      return produce(state, (draftState) => {
        draftState.value -= 1;
      });
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer