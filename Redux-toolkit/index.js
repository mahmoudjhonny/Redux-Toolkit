const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreameActions =
  require("./features/iceCreame/iceCreameSlice").icecreameActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial State", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreameActions.ordered());
// store.dispatch(icecreameActions.ordered());
// store.dispatch(icecreameActions.ordered());
// store.dispatch(icecreameActions.restocked(3));

// unSubscribe();
