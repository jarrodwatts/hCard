import React, { ReactElement } from "react";
import "./TextField.css";

interface Props {
  fieldName: string;
  fieldType: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Generic input text field component for the user to add their information to.
 * @param fieldName: Name of the text field (used for label and id)
 * @param fieldType: HTML Input Type: https://www.w3schools.com/html/html_form_input_types.asp
 * @param handleChange: A function of what to do when the user changes the value of this text field.
 * */
export default function TextField({
  fieldName,
  fieldType,
  handleChange,
}: Props): ReactElement {
  return (
    <div style={{ marginTop: 16 }} data-testid={fieldName}>
      <label className="label" htmlFor={fieldName}>
        {fieldName}
      </label>
      <input
        onChange={handleChange}
        className="input"
        type={fieldType}
        id={fieldName}
        name={fieldName}
      />
    </div>
  );
}
