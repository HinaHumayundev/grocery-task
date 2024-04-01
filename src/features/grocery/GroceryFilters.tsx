import React, { FC, useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import CoolsetButton from "../../components/button";
import TuneIcon from "@mui/icons-material/Tune";
import { GroceryItem } from "../../helpers/interface";

type Props = {
  setSelectedSection: (section: string) => void;
  setPage: (page: number) => void;
  groceryItems: GroceryItem[];
};

const GroceryFilters: FC<Props> = ({
  setSelectedSection,
  setPage,
  groceryItems,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectSection = (section: string) => {
    if (section === "none") {
      setSelectedSection("");
    } else {
      setSelectedSection(section);
    }
    setAnchorEl(null);
    setPage(0);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pt: 2,
        pb: 2,
      }}
    >
      <Typography variant="h6" sx={{ textAlign: "left", marginBottom: 2 }}>
        Today's groceries
      </Typography>
      <CoolsetButton
        handleFunction={(e: React.MouseEvent<HTMLButtonElement>) => {
          handleFilterClick(e);
        }}
        title="Filter by Section"
        Icon={<TuneIcon sx={{ color: "#939BAA" }} />}
        sx={{
          color: "#020617",
          borderColor: "#939BAA",
          textTransform: "none",
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {["none", ...new Set(groceryItems.map((item) => item.section))].map(
          (section) => (
            <MenuItem
              key={section}
              onClick={() => handleSelectSection(section)}
              data-testid={`menu-item-${section
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              {section}
            </MenuItem>
          )
        )}
      </Menu>
    </Box>
  );
};

export default GroceryFilters;
