import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GroceryTable from "../src/features/grocery/GroceryTable";
import { expect } from "vitest";
import { mockData } from "./mockData";

describe("GroceryTable component", () => {
  it("renders table with mock data", () => {
    render(
      <GroceryTable
        rowsPerPageOptions={[5]}
        sortedAndFilteredItems={mockData}
        page={0}
        rowsPerPage={5}
        handleChangePage={() => {}}
        handleChangeRowsPerPage={() => {}}
        sortOrder="asc"
        sortBy="weight"
        handleSortBy={() => {}}
      />
    );

    // Test if the component renders with mock data
    expect(screen.getByText("Item 1")).toBeTruthy();
    expect(screen.getByText("Item 2")).toBeTruthy();
    expect(screen.getByText("Item 4")).toBeTruthy();

    // Find the cell containing the section for Item 5
    const item5Text = screen.getByText("Item 5");
    if (item5Text) {
      const row = item5Text.closest("tr");
      if (row) {
        const cells = Array.from(row.children);
        const sectionCell = cells.find(
          (cell) => cell.textContent === "Beverages"
        );
        expect(sectionCell).toBeDefined();
      } else {
        fail("Row containing Item 5 not found");
      }
    } else {
      // If "Item 5" is not found, fail the test
      fail("Item 5 not found in rendered component");
    }

    // Verify that the pagination control is working correctly and it shows 1-5 of 10
    expect(screen.getByText("1–5 of 10")).toBeTruthy();

    // Change the page to 1
    fireEvent.click(screen.getByTitle("Go to next page"));
  });
});
