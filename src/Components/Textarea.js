import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Textarea({
  field,
  form: { touched, errors },
  ...props
}) {
  return <TextareaAutosize {...field} {...props} />;
}
