import React from "react";
import { TableContainer, TableContainerProps } from "@mui/material";

type Props = {
  children: React.ReactNode;
  className?: string;
  sx?: TableContainerProps["sx"];
};

const TableContainerCoolset: React.FC<Props> = ({
  children,
  className,
  sx,
}: Props) => {
  return (
    <TableContainer className={className} sx={sx}>
      {children}
    </TableContainer>
  );
};

export default TableContainerCoolset;
