import React from "react";
import { ErrorMessage, Field } from "formik";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

import { ErrorBoundary } from "Utils";

/**
 * props
 */
const propTypes = {
  containerProps: PropTypes.object,
  startadornment: PropTypes.object,
  endadornment: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

function Fld({
  containerProps,
  startadornment,
  endadornment,
  useComponent = true,
  placeholder,
  className,
  children,
  label,
  value,
  name,
  type,
  as,
  ...props
}) {
  const Render = props.component && useComponent ? props.component : Field;

  return (
    <ErrorBoundary>
      <Form.Group controlId={name} {...containerProps}>
        {label && <Form.Label>{label}</Form.Label>}
        <div
          className={`${
            startadornment || endadornment ? "input-container" : ""
          }`}
        >
          {startadornment && (
            <span
              className={`start-adornment ${startadornment.className || ""}`}
              {...startadornment}
            />
          )}
          <Render
            className={`form-control ${className || ""} ${
              props.component && useComponent ? "px-0 --border-none" : ""
            } ${startadornment || endadornment ? "--adorned" : ""}`}
            placeholder={placeholder}
            title={placeholder}
            value={value}
            name={name}
            {...(children && { children: children })}
            {...(type && { type: type })}
            {...(as && { as: as })}
            {...props}
          />

          {endadornment && (
            <span
              className={`end-adornment ${endadornment?.className}`}
              {...endadornment}
            />
          )}
        </div>
        <ErrorMessage name={name}>
          {(msg) => <p className="red-text font-size-12 mt-12 mb-0">{msg}</p>}
        </ErrorMessage>
      </Form.Group>
    </ErrorBoundary>
  );
}

Fld.propTypes = propTypes;

export default Fld;
