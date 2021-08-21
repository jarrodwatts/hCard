import React, { ReactElement } from "react";
import "./UploadButton.css";

interface Props {
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadButton({
  handleImageUpload,
}: Props): ReactElement {
  return (
    <div data-testid="upload-button">
      <label htmlFor="upload-button">
        <>
          <button
            onClick={() => document.getElementById("upload-button")?.click()}
            className="upload-button"
            type="button"
          >
            Upload Avatar
          </button>
        </>
      </label>
      <input
        type="file"
        id="upload-button-input"
        data-testid="upload-button-input"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
}
