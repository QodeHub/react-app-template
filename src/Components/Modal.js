import React from "react";
import { Modal as Mdl } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * prop definition
 */
const propTypes = {
  component: PropTypes.object,
  onHide: PropTypes.any,
  show: PropTypes.bool.isRequired,
  body: PropTypes.string,
};

export default function Modal({ body, onHide, show, header, ...props }) {
  return (
    <Mdl onHide={() => {}} centered show={show} {...props}>
      <Mdl.Body className={body + " p-32"}>
        {onHide && (
          <div className="d-flex align-items-center mb-32">
            <span className="cursor-pointer d-block mr-2 mt-1" onClick={onHide}>
              <i className="material-icons font-size-28">arrow_back</i>
            </span>
            <h1 className="font-size-24 mb-0 font-weight-600">{header}</h1>
          </div>
        )}
        {props.component || props.children}
      </Mdl.Body>
    </Mdl>
  );
}

/**
 * assignment
 */
Modal.propTypes = propTypes;
