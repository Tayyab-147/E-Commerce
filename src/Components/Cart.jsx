import { Clear, ShoppingBagOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Card,
  CardMedia,
  Drawer,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { removeItem } from "./Store/InventorySlice";
import { Link } from "react-router-dom";

const Cart = ({ cartOpen, setCartOpen }) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [error, setError] = useState(true);

  const drawerAnimation = useSpring({
    transform: cartOpen ? `translateX(0%)` : `translateX(100%)`,
    opacity: cartOpen ? 1 : 0,
  });

  const handleCartDrawerToggle = () => {
    setCartOpen(!cartOpen);
    console.log(items.length);
    console.log(error);
    if (items.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  const handleRemoveItem = (givenID) => {
    dispatch(removeItem(givenID));
  };

  return (
    <>
      <IconButton
        onClick={handleCartDrawerToggle}
        color="inherit"
        aria-label="Wishlist"
      >
        <Badge
          badgeContent={items.length}
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              top: 5,
            },
          }}
        >
          <ShoppingBagOutlined sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>
      <Drawer
        open={cartOpen}
        onClose={handleCartDrawerToggle}
        anchor="right"
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "350px",
            backgroundImage: "none",
          },
        }}
      >
        <animated.div style={drawerAnimation}>
          <Box
            sx={{
              flexDirection: "column",
              padding: 2,
            }}
          >
            {items &&
              items.map((item, index) => (
                <React.Fragment key={index}>
                  <Card
                    sx={{
                      display: "flex",
                      marginY: 1.5,
                      padding: 1,
                      boxShadow: 6,
                      // border: "1px solid",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      sx={{
                        maxWidth: "25%",
                        height: "70px",
                        border: "1px solid black",
                        borderRadius: 1,
                        marginRight: 1,
                      }}
                    />
                    <Box sx={{ alignItems: "center" }}>
                      <Typography sx={{ marginBottom: "max" }}>
                        {truncateTitle(item.title, 35)}
                      </Typography>
                      <Typography sx={{ color: "gray" }}>
                        {item.quantity} x ${item.price}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "auto" }}>
                      <IconButton onClick={() => handleRemoveItem(item.UID)}>
                        <Clear />
                      </IconButton>
                    </Box>
                  </Card>
                </React.Fragment>
              ))}
            <Box sx={{ display: "flex", marginTop: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                SubTotal:
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginLeft: "auto", fontWeight: "bold" }}
              >
                $
                {items
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <Link
            to={(error && "/") || "/checkout"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              onClick={() => setCartOpen(!cartOpen)}
              sx={{
                marginX: 3,
                padding: 1.5,
                borderRadius: 2,
                boxShadow: 5,
                backgroundColor: theme.customStyles.bgCustomCheckOut,
              }}
            >
              <Typography sx={{ color: theme.customStyles.typoCustomCheckOut }}>
                Proceed to Checkout
              </Typography>
            </Box>
          </Link>
          {error && (
            <Typography
              sx={{
                color: "red",
                marginLeft: 4,
                marginBottom: 3,
                marginTop: 1,
              }}
            >
              Please add items to your cart
            </Typography>
          )}
        </animated.div>
      </Drawer>
    </>
  );
};

export default Cart;
