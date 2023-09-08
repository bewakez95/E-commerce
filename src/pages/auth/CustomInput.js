import React from "react";
import { Form } from "react-bootstrap";

function CustomInput({ label, ...rest }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
}

export default CustomInput;
