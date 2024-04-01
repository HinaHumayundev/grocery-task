import React, { FC } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, TablePagination, TableRow } from "@mui/material";
import { GroceryTableProps } from "../../helpers/interface";
import TableHeaderCoolset from "../../components/table/table-header-cell";
import TableCellCoolset from "../../components/table/table-cell";

import {
  TableBodyCoolset,
  TableContainerCoolset,
  TableCoolset,
  TableHeadCoolset,
} from "../../components/table";

const GroceryTable: FC<GroceryTableProps> = ({
  rowsPerPageOptions,
  sortedAndFilteredItems,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  sortOrder,
  sortBy,
  handleSortBy,
}) => {
  return (
    <Box>
      <Box sx={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <TableContainerCoolset
          className="table-container"
          sx={{ maxHeight: "598px" }}
        >
          <TableCoolset sx={{ borderCollapse: "separate", borderSpacing: 0 }}>
            <TableHeadCoolset
              sx={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                backgroundColor: "#fff",
              }}
            >
              <TableRow>
                <TableHeaderCoolset>Name</TableHeaderCoolset>
                <TableHeaderCoolset>Section</TableHeaderCoolset>
                <TableHeaderCoolset>Price (€)</TableHeaderCoolset>
                <TableHeaderCoolset
                  sx={{
                    color: "#71717A",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "12px",
                    border: "1px solid #E2E8F0",
                  }}
                  onClick={() => handleSortBy("weight")}
                  data-testid="weight-header"
                >
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    {sortBy === "weight" &&
                      (sortOrder === "asc" ? (
                        <ArrowUpwardIcon
                          sx={{ fontSize: 18, fontWeight: "normal" }}
                        />
                      ) : (
                        <ArrowDownwardIcon
                          sx={{ fontSize: 18, fontWeight: "normal" }}
                        />
                      ))}
                    Price / 100 g (€)
                  </Box>
                </TableHeaderCoolset>
              </TableRow>
            </TableHeadCoolset>
            <TableBodyCoolset>
              {sortedAndFilteredItems
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCellCoolset data-testid="grocery-rows">
                      {item.name}
                    </TableCellCoolset>
                    <TableCellCoolset data-testid="grocery-rows">
                      {item.section}
                    </TableCellCoolset>
                    <TableCellCoolset data-testid="grocery-rows">
                      {item.price}
                    </TableCellCoolset>
                    <TableCellCoolset data-testid="grocery-rows">
                      {item.weight}
                    </TableCellCoolset>
                  </TableRow>
                ))}
            </TableBodyCoolset>
          </TableCoolset>
        </TableContainerCoolset>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ color: "#71717A" }}
      >
        <TablePagination
          component="div"
          count={sortedAndFilteredItems.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          data-testid="pagination"
        />
      </Box>
    </Box>
  );
};

export default GroceryTable;
