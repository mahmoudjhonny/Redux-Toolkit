const CreateSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;

const initialState = {
  numOfIceCreame: 20,
};

const icecreamSlice = CreateSlice({
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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreame--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreameActions = icecreamSlice.actions;
