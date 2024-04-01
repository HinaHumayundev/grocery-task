import React from "react";
import { TableCell } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const TableCellCoolset: React.FC<Props> = ({ children }: Props) => {
  return (
    <TableCell
      sx={{
        border: "1px solid #E2E8F0",
      }}
    >
      {children}
    </TableCell>
  );
};

export default TableCellCoolset;
