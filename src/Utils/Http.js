import React, { Fragment } from "react";
/**
 * packages
 */
import localforage from "localforage";
import { setup } from "axios-cache-adapter";
import { toast } from "react-toastify";

export const Http = setup({
  // timeout: 1000,
  baseURL: process.env.REACT_APP_API,
  headers: {
    // "X-CSRF-TOKEN": token?.content,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    request_client: "browser"
  },
  cache: {
    maxAge: 15 * 60 * 1000,

    store: localforage.createInstance({
      // List of drivers used
      driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
      // Prefix all storage keys to prevent conflicts
      name: "your-app-uniques"
    }),

    // Invalidate only when a specific option is passed through config
    invalidate: async (config, request) => {
      if (config.clearAll) {
        await config.store.clear();
      }

      if (request.crearEntry) {
        await config.store.removeItem(config.uuid);
      }

      if (request.method.toLowerCase() !== "get") {
        config.uuid.match(/.+\/v5\/\w+(\/w+)?/).forEach(async v => {
          await config.store.removeItem(v);
        });
        await config.store.removeItem(config.uuid.match(/.+\/v5\/\w+/)[0]);
      }
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
    config.headers["Authorization"] = `Bearer ${localStorage["jwt_token"]}`;
  }

  return config;
});

Http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response?.status) {
      if (error.response.status === 401) return false;

      if (error.response.status !== 422)
        toast.error(
          error.response?.data?.error?.message ||
            (error.response?.data).message ||
            error.message
        );

      if (process.env.REACT_APP_ENV === "dev") {
        toast.info(
          <Fragment>
            <p className="error-title">Http Exception</p>
            <hr />
            <div className="error-content">
              <pre>{JSON.stringify(error, 2, 2)}</pre>
            </div>
          </Fragment>,
          {
            rtl: true,
            autoClose: 30000,
            toastId: "dev-error-toast",
            className: "dev-error-toast",
            position: toast.POSITION.BOTTOM_LEFT
          }
        );
      }
    }

    return Promise.reject(error);
  }
);
