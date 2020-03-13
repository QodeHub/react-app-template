import React from "react";
import PropTypes from "prop-types";

import { ErrorMessage, Field } from "formik";
import { Form } from "react-bootstrap";

import { ErrorBoundary } from "Utils";

/**
 * props
 */
const propTypes = {
  containerProps: PropTypes.object,
  startadornment: PropTypes.object,
  endadornment: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.object,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default function FormField({
  containerProps,
  startadornment,
  endadornment,
  placeholder,
  children,
  label,
  value,
  name,
  type,
  as,
  ...props
}) {
  return (
    <ErrorBoundary>
      <Form.Group controlId={name} {...containerProps}>
        {label && <Form.Label {...label?.props}>{label?.value}</Form.Label>}
        <div className="position-relative d-flex align-items-center">
          {startadornment && (
            <span
              className={`start-adornment ${startadornment?.props?.className}`}
              {...startadornment?.props}
            >
              {startadornment.children}
            </span>
          )}
          <Field
            className={`form-control ${(startadornment &&
              "has-start-adornment") ||
              (endadornment && "has-end-adornment")} `}
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
              className={`end-adornment ${endadornment?.props?.css}`}
              {...endadornment?.props}
            >
              {endadornment.children}
            </span>
          )}
        </div>
        <ErrorMessage name={name}>
          {msg => <p className="red-text font-size-12 mt-12 mb-0">{msg}</p>}
        </ErrorMessage>
      </Form.Group>
    </ErrorBoundary>
  );
}

FormField.propTypes = propTypes;
