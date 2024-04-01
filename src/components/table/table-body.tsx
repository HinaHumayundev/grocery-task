import React from "react";
import { TableBody } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const TableBodyCoolset: React.FC<Props> = ({ children }: Props) => {
  return <TableBody>{children}</TableBody>;
};

export default TableBodyCoolset;
