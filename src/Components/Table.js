import React, { Fragment } from "react";
import { Table as VendorTable } from "react-bootstrap";

export function Td({ center, right, left, children, className }) {
  return (
    <td>
      <div
        className={`td justify-content-${
          (center && "center") || (right && "end") || (left && "start")
        } ${className} `}
      >
        {children}
      </div>
    </td>
  );
}

export function Th({ children, left, right, center }) {
  return (
    <th>
      <div
        className={`th justify-content-${
          (center && "center") || (right && "end") || (left && "start")
        }`}
      >
        {children}
      </div>
    </th>
  );
}

export default function Table({ header, headingSide, children, className }) {
  return (
    <div className="table-container">
      {(header || headingSide) && (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between mb-4">
            {header && (
              <h1 className="mb-0 font-size-18 font-size-md-24 font-weight-600">
                {header}
              </h1>
            )}
            {headingSide}
          </div>
        </Fragment>
      )}
      <VendorTable responsive striped hover borderless className={className}>
        {children}
      </VendorTable>
    </div>
  );
}
