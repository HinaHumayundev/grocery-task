import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GroceryFilters from "../src/features/grocery/GroceryFilters";
import { mockData } from "./mockData";
import { expect } from "vitest";

describe("GroceryFilters component", () => {
  it("renders filter menu with correct options", () => {
    // Define mock functions for setSelectedSection and setPage
    const setSelectedSection = (section) => {
      console.log(`Selected section: ${section}`);
    };

    const setPage = (page) => {
      console.log(`Set page to: ${page}`);
    };

    // Mock props with hardcoded functions
    const props = {
      setSelectedSection,
      setPage,
      groceryItems: mockData,
    };

    // Render the component
    render(<GroceryFilters {...props} />);

    // Test if the component renders with correct text and icon
    expect(screen.getByText("Today's groceries")).toBeTruthy();
    expect(screen.getByTestId("filter-button")).toBeTruthy();
    expect(screen.getByTestId("TuneIcon")).toBeTruthy();

    // Click on the filter button to open the menu
    fireEvent.click(screen.getByTestId("filter-button"));

    // Test if the menu contains the correct options
    expect(screen.getByText("Beverages")).toBeTruthy();
    mockData.forEach((item) => {
      expect(screen.getByText(item.section)).toBeTruthy();
    });

    fireEvent.click(screen.getByText("Fruits"));
  });
});
