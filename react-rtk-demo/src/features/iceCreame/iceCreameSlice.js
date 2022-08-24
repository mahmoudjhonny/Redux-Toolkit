import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIceCreame: 20,
};

const icecreamSlice = createSlice({
  name: "iceCreame",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreame--;
    },
    restocked: (state, action) => {
      state.numOfIceCreame += action.payload;
    },
  },
  // Use it to effect on the state of icecream by action of cake
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCreame--;
  //     },
  //   },
  // Anthor way
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreame--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
