import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * props schema
 */
const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  type: PropTypes.string,
};

function Notify({ title = null, body, type = "default" }) {
  return (
    <Fragment>
      {title && (
        <div className="heading d-flex justify-content-between align-items-center">
          <p className="mb-0 mr-2 title font-weight-600">{title && title}</p>
          <i className="material-icons icon">close</i>
        </div>
      )}
      <div className="content-container d-flex">
        <span className={`icon ${type}`}>
          {type === "default" && null}
          {type === "success" && <i className="material-icons">check</i>}
          {type === "error" && <i className="material-icons">close</i>}
        </span>
        <p className="content mb-0 mr-16">{body}</p>

        <i className="material-icons d-block ml-auto font-size-18">close</i>
      </div>
    </Fragment>
  );
}

/**
 * props assignment
 */
Notify.propTypes = propTypes;

export default Notify;
