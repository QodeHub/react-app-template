import React from "react";
import { createConfirmation, confirmable } from "react-confirm";
import { Modal } from "react-bootstrap";

import Button from "./Button";

export function Dialog({ show, proceed, confirmation, header, buttons }) {
  return (
    <Modal onHide={() => {}} show={show} centered>
      <Modal.Body className="p-4">
        {header && (
          <p className="font-size-20 font-weight-700 mb-3">{header}</p>
        )}
        <p className="mb-40" style={{ lineHeight: 1.5 }}>
          {confirmation}
        </p>
        <div className="d-flex align-items-center justify-content-end">
          <div className="px-6">
            <Button
              isValid
              value={buttons?.cancel?.value || "Cancel"}
              onClick={() => proceed(false)}
              className={`${
                buttons?.cancel?.className ||
                "default-border white-bg default-text"
              } px-3 btn-48`}
            />
          </div>
          <div className="px-6">
            <Button
              isValid
              value={buttons?.confirm?.value || "Confirm"}
              className={`btn-48 px-3 ${
                buttons?.confirm?.className || "red-border white-text red-bg"
              }`}
              onClick={() => proceed(true)}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export const confirm = createConfirmation(confirmable(Dialog));

export default confirm;
