import React from "react";
import { Button as Btn } from "react-bootstrap";
import Spinner from "./Spinner";

const Button = ({ isSubmitting, value, loadingColor, ...props }) => {
  return (
    <Btn
      {...props}
      variant="light"
      className={`btn ${props.className}`}
      {...(isSubmitting && { disabled: true })}
    >
      {isSubmitting ? (
        <Spinner contained size={25} color={loadingColor || "#fff"} />
      ) : (
        value
      )}
    </Btn>
  );
};

export default Button;
