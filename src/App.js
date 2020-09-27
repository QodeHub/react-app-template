import React from "reactn";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";

import { ErrorBoundary, Http } from "Utils";

import reducer from "Reducers";
import Routes from "Routes";

/**
 * inits
 */
reducer();

export default () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Qodehub React Template</title>
        </Helmet>
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
      </HelmetProvider>
      <ToastContainer />
    </ErrorBoundary>
  );
};
