import React from "react";
import { TableHead, TableHeadProps } from "@mui/material";

type Props = {
  children: React.ReactNode;
  sx?: TableHeadProps["sx"];
};

const TableHeadCoolset: React.FC<Props> = ({ children, sx }: Props) => {
  return <TableHead sx={sx}>{children}</TableHead>;
};

export default TableHeadCoolset;
