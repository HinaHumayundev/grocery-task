import React, { FC, ChangeEvent, useState } from "react";
import { Box } from "@mui/material";
import { SortOrder, compareFields } from "../../helpers/utils";
import GroceryFilters from "./GroceryFilters";
import GroceryTable from "./GroceryTable";
import { groceryItems } from "../../dummyData/mockData";
import { GroceryItem } from "../../helpers/interface";

const Grocery: FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"weight" | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const rowsPerPageOptions = [10, 25, 50, 100];

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSortBy = (field: keyof Pick<GroceryItem, "weight"> | null) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const sortedItems = selectedSection
    ? groceryItems.filter((item) =>
        selectedSection === "" ? true : item.section === selectedSection
      )
    : groceryItems;

  const sortedAndFilteredItems = sortBy
    ? sortedItems.slice().sort(compareFields(sortBy, sortOrder))
    : sortedItems;

  return (
    <section className="container">
      <Box sx={{ width: "100%" }}>
        <GroceryFilters
          setSelectedSection={setSelectedSection}
          groceryItems={groceryItems}
          setPage={setPage}
        />
        <GroceryTable
          rowsPerPageOptions={rowsPerPageOptions}
          sortedAndFilteredItems={sortedAndFilteredItems}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          sortOrder={sortOrder}
          sortBy={sortBy}
          handleSortBy={handleSortBy}
        />
      </Box>
    </section>
  );
};

export default Grocery;
