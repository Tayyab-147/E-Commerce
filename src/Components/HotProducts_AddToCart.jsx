import React from "react";
import { IconButton, Box, Tooltip } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const HotProducts_AddToCart = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 42,
        right: -5,
        transform: "translate(-50%, -50%)",
        opacity: 0,
        visibility: "hidden",
        transition: "opacity 0.3s, visibility 0.3s",
        zIndex: 1,
      }}
      className="add-to-cart-button"
    >
      <Tooltip title="Add to Cart" placement="top">
        <IconButton
          size="large"
          color="primary"
          onClick={onClick}
          sx={{
            backgroundColor: "rgb(123, 174, 218)",
            "&:hover": {
              backgroundColor: "rgb(81, 146, 196)",
            },
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default HotProducts_AddToCart;
