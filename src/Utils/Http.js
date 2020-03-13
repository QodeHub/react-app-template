// import React, { useGlobal } from "reactn";
import { setup } from "axios-cache-adapter";
import localforage from "localforage";

// import { toast } from "react-toastify";

export const Http = setup({
  // timeout: 1000,
  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    request_client: "browser"
  },
  cache: {
    maxAge: 1000,

    store: localforage.createInstance({
      // List of drivers used
      driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
      // Prefix all storage keys to prevent conflicts
      name: process.env.REACT_APP_QUERY_NAME
    }),

    // Invalidate only when a specific option is passed through config
    invalidate: async (config, request) => {
      if (config.clearAll) {
        await config.store.clear();
      }

      if (request.clearEntry) {
        await config.store.removeItem(config.uuid);
      }

      // if (request.method.toLowerCase() !== "get") {
      //   config.uuid.match(/.+\/v1\/\w+(\/w+)?/).forEach(async v => {
      //     await config.store.removeItem(v);
      //   });
      //   await config.store.removeItem(config.uuid.match(/.+\/v1\/\w+/)[0]);
      // }
    },

    // {Object} Define which kind of requests should be excluded from cache.
    exclude: {
      // {Array} List of regular expressions to match against request URLs.
      paths: [/\/auth\/.+/],
      // {Boolean} Exclude requests with query parameters.
      query: true,
      // {Function} Method which returns a `Boolean` to determine if request
      // should be excluded from cache.
      filter: null
    },

    debug: process.env.REACT_APP_ENV === "dev"
  }
});

Http.interceptors.request.use(config => {
  if (!/(\/auth\/(?!refresh|logout|me|email).+)/.test(config.url)) {
    config.headers["Authorization"] = `Bearer ${localStorage["access_token"]}`;
  }

  return config;
});

Http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response?.status) {
      if (error.response.status === 401) return;

      if (error.response.status === 500) return;
    }

    return Promise.reject(error);
  }
);

export default Http;
