import React from "react";
import { Button as Btn } from "react-bootstrap";
import PropTypes from "prop-types";

import Spinner from "./Spinner";

const propTypes = {
  isValid: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  loadingColor: PropTypes.string,
  value: PropTypes.any,
};

const defaultProps = {
  isValid: false,
  isSubmitting: false,
  loadingColor: "#fff",
};

function Button({
  isValid = false,
  isSubmitting,
  loadingColor,
  value,
  ...props
}) {
  return (
    <Btn
      {...props}
      variant="default"
      className={props.className}
      {...(isSubmitting && { disabled: true })}
      {...(!isValid && { disabled: true })}
    >
      {isSubmitting ? (
        <Spinner contained size={25} color={loadingColor || "#fff"} />
      ) : (
        value
      )}
    </Btn>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
