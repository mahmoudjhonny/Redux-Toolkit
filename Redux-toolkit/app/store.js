const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreameReducer = require("../features/iceCreame/iceCreameSlice");
const userReducer = require("../features/user/userSlice");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecreame: iceCreameReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
