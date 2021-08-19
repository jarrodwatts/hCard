import React, { ReactElement } from "react";
import "./TextField.css";

interface Props {
  fieldName: string;
  fieldType: string;
}

export default function TextField({
  fieldName,
  fieldType,
}: Props): ReactElement {
  return (
    <div style={{ marginTop: 16 }}>
      <label className="label" htmlFor={fieldName}>
        {fieldName}
      </label>
      <input
        className="input"
        type={fieldType}
        id={fieldName}
        name={fieldName}
      />
    </div>
  );
}
