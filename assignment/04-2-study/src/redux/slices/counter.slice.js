import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      // console.log(action.type); // counter/increament
      const value = action.payload;
      state.count += value;
    },
    decrement: (state, action) => {
      const value = action.payload;
      state.count -= value;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
