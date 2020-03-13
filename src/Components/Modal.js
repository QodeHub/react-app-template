import React from "react";
import { Modal as Mdl } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * prop definition
 */
const propTypes = {
  component: PropTypes.object.isRequired,
  onHide: PropTypes.any,
  show: PropTypes.bool.isRequired,
  body: PropTypes.string
};

export default function Modal({ body, onHide, show, header, ...props }) {
  return (
    <Mdl onHide={() => {}} centered show={show}>
      <Mdl.Body className={body}>
        {onHide && (
          <div className="d-flex align-items-center mb-32">
            <span className="pointer d-block mr-2" onClick={onHide}>
              <i className="material-icons">arrow_back</i>
            </span>
            <h1 className="font-size-20 mb-0 font-weight-600">{header}</h1>
          </div>
        )}
        {props.component}
      </Mdl.Body>
    </Mdl>
  );
}

/**
 * assignment
 */
Modal.propTypes = propTypes;
