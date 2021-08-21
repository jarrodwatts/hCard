import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { addressDetails, personalDetails } from "./data/formDataPoints";

test("Renders Successfully", () => {
  render(<App />);
  const h1Element = screen.getByText(/hCard Builder/i);
  expect(h1Element).toBeInTheDocument();
});

describe("Personal Detail Form Fields", () => {
  test("Personal Detail Form fields render correctly", () => {
    render(<App />);

    personalDetails.forEach((field) => {
      const fieldOnScreen = screen.getByLabelText(field.fieldName);
      expect(fieldOnScreen).toBeInTheDocument();
    });
  });

  test("All Personal Detail form fields live update hCnameElement", () => {
    render(<App />);
    const testPersonalData: Record<string, string> = {
      "given name": "Sam",
      surname: "Fairfax",
      email: "sam.fairfax@fairfaxmedia.com.au",
      phone: "02 9282 2833",
    };

    personalDetails.forEach((field) => {
      // Get field from DOM
      const domField = screen.getByLabelText(field.fieldName);
      fireEvent.change(domField, {
        target: { value: testPersonalData[field.fieldName] },
      });

      expect((domField as HTMLInputElement).value).toBe(
        testPersonalData[field.fieldName]
      );
    });

    // Find Name
    const nameElement = screen.getByText("Sam Fairfax");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.tagName).toBe("H2");

    // Find Phone
    const phoneElement = screen.getByText("02 9282 2833");
    expect(phoneElement).toBeInTheDocument();
    expect(phoneElement.tagName).toBe("P");
  });
});

describe("Address Detail Form Fields", () => {
  test("Address Detail Form fields render correctly", () => {
    render(<App />);

    const testAddressData: Record<string, string> = {
      "house name or #": "1",
      street: "Darling Island Road",
      suburb: "Pyrmont",
      state: "NSW",
      postcode: "2009",
      country: "Australia",
    };

    addressDetails.forEach((field) => {
      const fieldOnScreen = screen.getByLabelText(field.fieldName);
      expect(fieldOnScreen).toBeInTheDocument();
    });

    addressDetails.forEach((field) => {
      // Get field from DOM
      const domField = screen.getByLabelText(field.fieldName);
      fireEvent.change(domField, {
        target: { value: testAddressData[field.fieldName] },
      });

      expect((domField as HTMLInputElement).value).toBe(
        testAddressData[field.fieldName]
      );
    });

    // Find Address
    const addressElement = screen.getByText("1 Darling Island Road");
    expect(addressElement).toBeInTheDocument();
    expect(addressElement.tagName).toBe("P");

    // Find Postcode
    const postcodeElement = screen.getByText("2009");
    expect(postcodeElement).toBeInTheDocument();
    expect(postcodeElement.tagName).toBe("P");

    // Find Country
    const countryElement = screen.getByText("Australia");
    expect(countryElement).toBeInTheDocument();
    expect(countryElement.tagName).toBe("P");
  });
});
