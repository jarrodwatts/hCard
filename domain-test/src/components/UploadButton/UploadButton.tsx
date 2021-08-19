import React, { ReactElement } from "react";
import "./UploadButton.css";

interface Props {
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadButton({
  handleImageUpload,
}: Props): ReactElement {
  return (
    <>
      <label htmlFor="upload-button">
        <>
          <button
            onClick={() => document.getElementById("upload-button")?.click()}
            className="upload-button"
            style={{
              width: "95%",
              minHeight: 48,
              borderRadius: 4,
              fontSize: 24,
              textAlign: "center",
            }}
            type="button"
          >
            Upload Avatar
          </button>
        </>
      </label>
      <input
        type="file"
        id="upload-button"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </>
  );
}
