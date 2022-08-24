const redux = require("redux");
const thunkMiddlewar = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");

// Initial State
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action Types
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// Action Creator
const request_users = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const request_users_success = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const request_users_fail = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(request_users);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(request_users_success(users));
      })
      .catch((error) => {
        dispatch(request_users_fail(error.massage));
      });
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddlewar));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
