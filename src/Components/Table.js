import React, { Fragment } from "react";
import { Table as VendorTable } from "react-bootstrap";

export function Td({ center, right, left, children, className, ...props }) {
  return (
    <td {...props}>
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

export function Th({ children, left, right, center, ...props }) {
  return (
    <th {...props}>
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

export default function Table({ header, headingSide, children, ...props }) {
  return (
    <div className="table-container">
      {(header || headingSide) && (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between mb-32">
            {header}
            {headingSide}
          </div>
        </Fragment>
      )}
      <div
        className={`table-responsive ${!(header || headingSide) && "h-100"}`}
      >
        <VendorTable {...props}>{children}</VendorTable>
      </div>
    </div>
  );
}
