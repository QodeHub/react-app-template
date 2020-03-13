import { rootState } from "./";

export const login = (state, dispatch, payload) => {
  localStorage["access_token"] = payload.access_token;
  return { user: payload.user, isAuthenticated: true };
};

export const logout = () => {
  return rootState;
};

export const setToken = accessToken =>
  (localStorage["access_token"] = accessToken);
