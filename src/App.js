import React from "reactn";
/**
 * packages
 */
import { ToastContainer } from "react-toastify";
import { AxiosProvider } from "react-axios";

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
      <AxiosProvider instance={Http}>
        <Routes />
      </AxiosProvider>
      <ToastContainer />
    </ErrorBoundary>
  );
}
