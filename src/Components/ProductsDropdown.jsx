import React, { useState } from "react";
import {
  Box,
  Typography,
  Popper,
  MenuItem,
  Paper,
  useTheme,
} from "@mui/material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const ProductsDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const arrowStyle = {
    position: "absolute",
    width: 0,
    height: 0,
    borderColor: "theme.customStyles.typoCustom",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "10px solid",
    top: "-10px",
    left: "calc(50% - 23px)",
  };

  const arrowContainerStyle = {
    position: "relative",
  };

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Typography
        aria-haspopup="true"
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          color: "inherit",
          cursor: "pointer",
        }}
      >
        PRODUCTS
        <KeyboardArrowDownOutlined sx={{ marginLeft: 0.5 }} />
      </Typography>
      <Popper
        id="products-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onMouseLeave={handleMouseLeave}
        disablePortal
      >
        <Box sx={arrowContainerStyle}>
          <Box sx={arrowStyle} />
          <Paper>
            <Box sx={{ display: "flex", p: 2, marginTop: 1.5 }}>
              <Box sx={{ mr: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  NEW ARRIVALS
                </Typography>
                <MenuItem onClick={handleMouseLeave}>Latest Products</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Top Rated</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Best Sellers</MenuItem>
                <MenuItem onClick={handleMouseLeave}>On Sale</MenuItem>
              </Box>
              <Box sx={{ mr: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  COLLECTIONS
                </Typography>
                <MenuItem onClick={handleMouseLeave}>
                  Spring Collection
                </MenuItem>
                <MenuItem onClick={handleMouseLeave}>
                  Summer Collection
                </MenuItem>
                <MenuItem onClick={handleMouseLeave}>
                  Autumn Collection
                </MenuItem>
                <MenuItem onClick={handleMouseLeave}>
                  Winter Collection
                </MenuItem>
              </Box>
              <Box>
                <Box
                  component="img"
                  src="https://portotheme.com/html/porto_ecommerce/assets/images/menu-banner-1.jpg"
                  alt="Sale"
                  sx={{ width: 120, height: 180 }}
                />
              </Box>
            </Box>
          </Paper>
        </Box>
      </Popper>
    </div>
  );
};

export default ProductsDropdown;
