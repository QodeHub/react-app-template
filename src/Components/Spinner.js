import React from "react";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  center: PropTypes.bool,
  contained: PropTypes.bool,
};

const defaultProps = {
  size: 50,
  color: "#555",
  center: true,
  contained: false,
};

export default function Spinner({ size, color, center, contained, ...props }) {
  return (
    <div
      className={`${center && "vertically-center"} ${
        contained && "d-flex align-items-center justify-content-center mx-auto"
      }`}
    >
      <ClipLoader size={size || 50} color={color || "#555"} {...props} />
    </div>
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
