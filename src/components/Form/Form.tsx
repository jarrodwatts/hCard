import React, { ReactElement } from "react";
import { personalDetails, addressDetails } from "../../data/formDataPoints";
import TextField from "../TextField/TextField";
import UploadButton from "../UploadButton/UploadButton";

interface Props {
  changeFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Form Component of the hCard Builder.
 * Responsible for managing the values the user inputs into the text fields.
 * @param changeFormValue: A function to handle what to do when a text field value is modified.
 * @param handleImageUpload: A function to handle what to do when a file gets uploaded.
 * */
export default function Form({
  changeFormValue,
  handleImageUpload,
}: Props): ReactElement {
  return (
    <div className="section">
      <div style={{ marginLeft: "4%", marginRight: "4%" }}>
        <h1 className="title">hCard Builder</h1>

        {/* Personal Details */}
        <div>
          <h2 className="hint">Personal Details</h2>
          <hr />
          <div className="form-grid">
            {personalDetails.map((field) => (
              <TextField
                key={field.fieldName}
                fieldName={field.fieldName}
                fieldType={field.fieldType}
                handleChange={changeFormValue}
              />
            ))}
          </div>
        </div>

        {/* Address */}
        <div style={{ marginTop: 64 }}>
          <h2 className="hint">Address</h2>
          <hr />
          <div className="form-grid">
            {addressDetails.map((field) => (
              <TextField
                key={field.fieldName}
                fieldName={field.fieldName}
                fieldType={field.fieldType}
                handleChange={changeFormValue}
              />
            ))}

            {/* CTA Buttons */}
            <div style={{ marginTop: 32 }}>
              <UploadButton handleImageUpload={handleImageUpload} />
            </div>
            <div style={{ marginTop: 32 }}>
              <button
                onClick={() => console.log("Submit to API!")}
                className="secondary secondary-button"
              >
                Create hCard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
