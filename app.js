const redux = require("redux");

const createStore = redux.createStore;

const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCKING = "CAKE_RESTOCKING";

const orderCake = () => {
  return {
    type: CAKE_ORDER,
    payload: 1,
  };
};

const restockingCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKING,
    payload: qty,
  };
};

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKING:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State : ", store.getState());
const unSubscribe = store.subscribe(() => {
  console.log("Update State : ", store.getState());
});

const actions = bindActionCreators(
  { orderCake, restockingCake },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockingCake(4);

unSubscribe();
