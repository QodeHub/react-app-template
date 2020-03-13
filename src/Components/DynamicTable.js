import React from "react";
import { Table } from "react-bootstrap";

export function Td({ center, right, left, children }) {
  return (
    <td>
      <div
        className={`td justify-content-${(center && "center") ||
          (right && "end") ||
          (left && "start")}`}
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
        className={`th justify-content-${(center && "center") ||
          (right && "end") ||
          (left && "start")}`}
      >
        {children}
      </div>
    </th>
  );
}

export default function DynamicTable({ header, children, className }) {
  return (
    <div className={`table-responsive ${className}`}>
      {header && (
        <h1 className="mb-24 font-size-24 font-weight-600">{header}</h1>
      )}
      <Table>{children}</Table>
    </div>
  );
}
