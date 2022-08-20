const redux = require("redux");

const createStore = redux.createStore;

const bindActionCreators = redux.bindActionCreators;

const combineReducers = redux.combineReducers;

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCKING = "CAKE_RESTOCKING";
const ICECREAME_ORDER = "ICECREAME_ORDER";
const ICECREAME_RESTOKING = "ICECREAME_RESTOKING";

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

const orderIceCreame = () => {
  return {
    type: ICECREAME_ORDER,
    payload: 1,
  };
};

const restockingIceCreame = (qty = 1) => {
  return {
    type: ICECREAME_RESTOKING,
    payload: qty,
  };
};

const Cake_initialState = {
  numOfCakes: 10,
};

const Icecreame_initialState = {
  numOfIceCreams: 20,
};

const Cake_reducer = (state = Cake_initialState, action) => {
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

const IceCreame_reducer = (state = Icecreame_initialState, action) => {
  switch (action.type) {
    case ICECREAME_ORDER:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAME_RESTOKING:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: Cake_reducer,
  iceCreame: IceCreame_reducer,
});

const store = createStore(rootReducers);
console.log("Initial State : ", store.getState());
const unSubscribe = store.subscribe(() => {
  console.log("Update State : ", store.getState());
});

const actions = bindActionCreators(
  { orderCake, restockingCake, restockingIceCreame, orderIceCreame },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderIceCreame();
actions.orderIceCreame();
actions.orderIceCreame();
actions.orderIceCreame();

actions.restockingCake(4);
actions.restockingIceCreame(4);

unSubscribe();
