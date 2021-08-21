import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextField from "./TextField";

test("Renders correctly", () => {
  const { queryByTestId } = render(
    <TextField
      fieldName={"given name"}
      fieldType={"text"}
      handleChange={(e) => console.log(e.target.value)}
    />
  );
  expect(queryByTestId("given name")).toBeTruthy();
});

describe("Input value", () => {
  test("Updates on change", () => {
    const { queryByLabelText } = render(
      <TextField
        fieldName={"given name"}
        fieldType={"text"}
        handleChange={(e) => console.log(e.target.value)}
      />
    );

    const input = queryByLabelText("given name");
    if (input) {
      fireEvent.change(input, { target: { value: "test" } });
    }
    expect((input as HTMLInputElement).value).toBe("test");
  });
});
