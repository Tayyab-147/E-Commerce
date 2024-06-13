import React, { useState, useRef } from "react";
import {
  IconButton,
  Paper,
  TextField,
  Typography,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Divider,
  Dialog,
  DialogContent,
  Box,
} from "@mui/material";
import { Search, KeyboardArrowDownOutlined, Clear } from "@mui/icons-material";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const categoryButtonRef = useRef(null);

  const handleSearchIconClick = (event) => {
    setOpen((prev) => !prev);
    setCategoryOpen(false);
  };

  const handleCategoryOpen = () => {
    setCategoryOpen(true);
  };

  const handleCategoryClose = () => {
    setCategoryOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    handleCategoryClose();
  };

  const handleSearchClose = () => {
    setOpen(false);
  };

  const categories = [
    "All Categories",
    "Fashion",
    " - Women",
    " - Men",
    " - Jewellery",
    " - Kids Fashion",
    "Electronics",
    " - Smart TVs",
    " - Cameras",
    " - Games",
    "Home & Garden",
    "Motors",
    " - Cars and Trucks",
    " - Motorcycles & Powersports",
    " - Parts & Accessories",
    " - Boats",
    " - Auto Tools & Supplies",
  ];

  return (
    <>
      <IconButton
        size="medium"
        edge="end"
        color="inherit"
        aria-label="search"
        onClick={handleSearchIconClick}
      >
        <Search sx={{ fontSize: 30, marginRight: "5px" }} />
      </IconButton>
      {open && (
        <Dialog
          open={open}
          onClose={handleSearchClose}
          sx={{
            "& .MuiDialog-paper": {
              backgroundColor: "transparent !important",
              boxShadow: "none",
              overflow: "visible",
              backgroundImage: "none",
            },
          }}
        >
          <DialogContent>
            <Box sx={{ display: "flex" }}>
              <IconButton
                onClick={handleSearchClose}
                sx={{
                  marginLeft: "auto",
                  color: "white",
                }}
              >
                <Clear />
              </IconButton>
            </Box>
            <Paper
              sx={{
                position: "relative",
                border: 4,
                borderRadius: 8,
                borderColor: "rgb(54, 117, 135)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: 60,
                overflow: "visible",
                marginBottom: 8,
              }}
            >
              <TextField
                placeholder="I'm searching for…"
                variant="outlined"
                InputProps={{
                  sx: {
                    "& fieldset": { border: "none" },
                  },
                }}
                sx={{ marginLeft: 1, width: 250 }}
              />
              <Divider
                sx={{
                  display: { xs: "none", sm: "flex" },
                  transform: "rotate(90deg)",
                  borderColor: "gray",
                  borderWidth: 1,
                  width: "30px",
                }}
              />
              <IconButton
                size="large"
                color="inherit"
                onClick={handleCategoryOpen}
                ref={categoryButtonRef}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Typography sx={{ display: { xs: "none", sm: "flex" } }}>
                  {selectedCategory}
                </Typography>
                <KeyboardArrowDownOutlined />
              </IconButton>
              <Divider
                sx={{
                  transform: "rotate(90deg)",
                  borderColor: "gray",
                  borderWidth: 1,
                  width: "30px",
                }}
              />
              <IconButton
                size="large"
                color="inherit"
                onClick={handleSearchClose}
              >
                <Search />
              </IconButton>
            </Paper>
            {categoryOpen && (
              <Popper
                open={categoryOpen}
                anchorEl={categoryButtonRef.current}
                disablePortal
                placement="bottom"
              >
                <Paper
                  sx={{
                    maxHeight: 200,
                    overflowY: "auto",
                    zIndex: 1500,
                  }}
                >
                  <ClickAwayListener onClickAway={handleCategoryClose}>
                    <MenuList>
                      {categories.map((category) => (
                        <MenuItem
                          key={category}
                          onClick={() => handleCategorySelect(category)}
                          sx={{
                            fontSize: "12px",
                            lineHeight: "7px",
                            color: "gray",
                          }}
                        >
                          {category}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Popper>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default SearchBar;
