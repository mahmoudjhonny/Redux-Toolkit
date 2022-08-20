const redux = require("redux");

const createStore = redux.createStore;

const produce = require("immer").produce;

const initialState = {
  name: "Mahmoud",
  adress: {
    street: "12 Cairo Egypt",
    city: "Zagazig",
    state: "Menya El-kamh",
  },
};

const STREET_UPDATE = "STREET_UPDATE";

const update_street = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const update_reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      //   return {
      //     ...state,
      //     adress: {
      //       ...state.adress,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.adress.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(update_reducer);
console.log("Initial State : ", store.getState());
const unSubscribe = store.subscribe(() => {
  console.log("Update State : ", store.getState());
});

store.dispatch(update_street("Rabeea st."));
unSubscribe();
