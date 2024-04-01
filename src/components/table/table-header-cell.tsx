import React from "react";
import { TableCell, TableCellProps } from "@mui/material";

type Props = TableCellProps & {
  children: React.ReactNode;
};

const TableHeaderCoolset: React.FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <TableCell
      sx={{
        fontWeight: "600",
        fontSize: "12px",
        color: "#71717A",
        border: "1px solid #E2E8F0",
      }}
      {...rest}
    >
      {children}
    </TableCell>
  );
};

export default TableHeaderCoolset;
