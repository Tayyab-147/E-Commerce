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

const CategoriesDropdown = () => {
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
    left: "calc(50% - 20px)",
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
          color: "inherit",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        CATEGORIES
        <KeyboardArrowDownOutlined sx={{ marginLeft: 0.5 }} />
      </Typography>
      <Popper
        id="categories-menu"
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
                  ELECTRONICS
                </Typography>
                <MenuItem onClick={handleMouseLeave}>Laptops</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Smartphones</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Cameras</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Accessories</MenuItem>
              </Box>
              <Box sx={{ mr: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  FASHION
                </Typography>
                <MenuItem onClick={handleMouseLeave}>Men's Clothing</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Women's Clothing</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Jewelry</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Shoes</MenuItem>
              </Box>
              <Box>
                <Box
                  component="img"
                  src="https://portotheme.com/html/porto_ecommerce/assets/images/menu-banner.jpg"
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

export default CategoriesDropdown;
