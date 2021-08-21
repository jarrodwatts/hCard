import React, { ReactElement } from "react";
import "./TextField.css";

interface Props {
  fieldName: string;
  fieldType: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
