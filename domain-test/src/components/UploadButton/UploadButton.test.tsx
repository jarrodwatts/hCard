import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UploadButton from "./UploadButton";
import logo from "../../logo.svg";

test("Renders correctly", () => {
  const { queryByTestId } = render(
    <UploadButton
      handleImageUpload={(e) => console.log(e?.target?.files?.[0])}
    />
  );
  expect(queryByTestId("upload-button")).toBeTruthy();
});

describe("Upload Button", () => {
  test("Can upload File", () => {
    const { queryByTestId } = render(
      <UploadButton
        handleImageUpload={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e?.target?.files?.[0])
        }
      />
    );

    const uploadButton = queryByTestId("upload-button-input");
    if (uploadButton) {
      fireEvent.change(uploadButton, { target: { files: [logo] } });
    }

    expect((uploadButton as HTMLInputElement).files?.length).toBe(1);
    expect((uploadButton as HTMLInputElement).files).toContain("logo.svg");
  });
});
