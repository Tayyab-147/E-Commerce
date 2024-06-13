import { Card, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HotProducts_AddToCart from "./HotProducts_AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItems } from "./Store/InventorySlice";
import { nanoid } from "@reduxjs/toolkit";

const HotItems = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error making the request:", error);
      });
  }, []);

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  const handleAddToCart = (product) => {
    const existingItem = items.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      console.log(updatedItems);
      dispatch(updateItems(updatedItems));
    } else {
      dispatch(addItem({ ...product, UID: nanoid(), quantity: 1 }));
    }
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", marginTop: 5 }}
      >
        HOT PRODUCTS
      </Typography>
      <Grid container sx={{ padding: 2 }}>
        {products.map((product) => (
          <Grid key={product.id} item xs={6} sm={4} md={3} lg={2.4}>
            <Card
              sx={{
                position: "relative",
                display: "inline-block",
                alignItems: "center",
                textAlign: "center",
                width: "95%",
                marginY: 1,
                padding: 1.5,
                "&:hover .add-to-cart-button": {
                  opacity: 1,
                  visibility: "visible",
                },
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  maxWidth: "100%",
                  height: "220px",
                  border: "1px solid black",
                  borderRadius: 2,
                }}
              />
              <HotProducts_AddToCart onClick={() => handleAddToCart(product)} />
              <Typography sx={{ marginTop: 1 }}>
                {truncateTitle(product.title, 20)}
              </Typography>
              <Typography>${product.price}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HotItems;
