import React from "react";
import { Table, TableProps } from "@mui/material";

type Props = {
  children: React.ReactNode;
  sx?: TableProps["sx"];
};

const TableCoolset: React.FC<Props> = ({ children, sx }: Props) => {
  return <Table sx={sx}>{children}</Table>;
};

export default TableCoolset;
