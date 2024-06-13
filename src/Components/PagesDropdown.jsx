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

const PagesDropdown = () => {
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
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        PAGES
        <KeyboardArrowDownOutlined sx={{ marginLeft: 0.5 }} />
      </Typography>
      <Popper
        id="pages-menu"
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
                  INFORMATION
                </Typography>
                <MenuItem onClick={handleMouseLeave}>About Us</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Contact Us</MenuItem>
                <MenuItem onClick={handleMouseLeave}>FAQ</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Privacy Policy</MenuItem>
              </Box>
              <Box sx={{ mr: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  USER ACCOUNT
                </Typography>
                <MenuItem onClick={handleMouseLeave}>Login</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Register</MenuItem>
                <MenuItem onClick={handleMouseLeave}>My Account</MenuItem>
                <MenuItem onClick={handleMouseLeave}>Order History</MenuItem>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Popper>
    </div>
  );
};

export default PagesDropdown;
