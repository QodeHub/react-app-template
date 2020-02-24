import React from "reactn";
/**
 * packages
 */
import { ToastContainer } from "react-toastify";

/**
 * others
 */
import { ErrorBoundary } from "Utils";
import reducer from "Reducers";
import Routes from "Routes";

/**
 * inits
 */
reducer();

export default function App() {
  return (
    <ErrorBoundary>
      <div className="h-100 w-100">
        <Routes />
      </div>
      <ToastContainer />
    </ErrorBoundary>
  );
}
