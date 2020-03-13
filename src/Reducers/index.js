import { addCallback, setGlobal, addReducer } from "reactn";
import * as auth from "./auth";
/**
 * variables
 */
const rootKey = process.env.REACT_APP_ROOT_KEY;

/**
 * states
 */
export const rootState = {
  isAuthenticated: false,
  user: null
};

/**
 * reducers
 */
const reducers = {
  "auth.login": auth.login,
  "auth.logout": auth.logout
};

/**
 * store all global states in localStorage for persistence
 * @param {*} global
 */
export function handleChange(global) {
  /**
   * push global states to localStorage
   */
  const newState = JSON.stringify(global);
  localStorage[rootKey] = newState;
}

export default function handle() {
  const states = localStorage[rootKey]
    ? JSON.parse(localStorage[rootKey])
    : rootState;
  /**
   * set global variables
   */
  setGlobal(states);

  /**
   * set reducers
   */
  Object.entries(reducers).map(([key, val]) => addReducer(key, val));

  /**
   * when updates are done to global store, callback function is fired
   */
  addCallback(handleChange);

  return true;
}
