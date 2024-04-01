import React, { FC } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

type Props = {
  handleFunction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  Icon?: React.ReactNode;
  sx?: ButtonProps["sx"];
};

const CoolsetButton: FC<Props> = ({
  handleFunction,
  title,
  Icon,
  sx,
}: Props) => {
  const formattedTitle =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

  return (
    <Button
      variant="outlined"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleFunction(e)}
      data-testid="filter-button"
      sx={sx}
    >
      {Icon && Icon} {formattedTitle}
    </Button>
  );
};

export default CoolsetButton;
