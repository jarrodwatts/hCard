import React, { ReactElement } from "react";
import "./UploadButton.css";

interface Props {
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Upload Button Masking the default file input from HTML
 * Uses a button as a label element overlaying a hidden file input field.
 * @param handleImageUpload: A function of what to do when an image is uploaded by the user.
 * */
export default function UploadButton({
  handleImageUpload,
}: Props): ReactElement {
  return (
    <div data-testid="upload-button">
      <label htmlFor="upload-button">
        <>
          <button
            onClick={() =>
              document.getElementById("upload-button-input")?.click()
            }
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
