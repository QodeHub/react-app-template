import React from "react";
import { useTitle } from "Utils";

export default function Home() {
  /**
   * set title
   */
  useTitle("Qodehub React Template");

  return (
    <div className="justify-content-center align-items-center d-flex h-100 w-100 position-absolute">
      <h1 className="mb-0">Your beautiful template</h1>
    </div>
  );
}
