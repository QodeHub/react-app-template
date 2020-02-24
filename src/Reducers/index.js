import { setGlobal, addReducer } from "reactn";

/**
 * states
 */
export const states = {
  user: null
};

/**
 * reducers
 */
const reducers = {};

export default function handle() {
  /**
   * set global variables
   */
  setGlobal(states);

  /**
   * set reducers
   */
  Object.entries(reducers).map(([key, val]) => addReducer(key, val));
}
