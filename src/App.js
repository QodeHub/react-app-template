import React from "reactn";
/**
 * packages
 */
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";

/**
 * others
 */
import { ErrorBoundary, Http } from "Utils";
import reducer from "Reducers";
import Routes from "Routes";

/**
 * inits
 */
reducer();

export default function App() {
  return (
    <ErrorBoundary>
      <SWRConfig
        value={{
          fetcher: (url) => Http.get(url).then(({ responses }) => responses),
          shouldRetryOnError: false,
          errorRetryInterval: 0,
          errorRetryCount: 2,
        }}
      >
        <Routes />
      </SWRConfig>
      <ToastContainer />
    </ErrorBoundary>
  );
}
