import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../Components/Store/InventorySlice";

const CheckoutSuccess = () => {
  const subTotal = localStorage.getItem("subTotal");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearItems());
  }, []);

  return (
    <Box sx={{ textAlign: "center", marginTop: 10 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Payment Successful!
      </Typography>
      <Typography>
        Thank you for your payment. <b>${subTotal}</b> has been successfully
        credited from your account.
      </Typography>
      <Typography sx={{ marginTop: 2 }}>Go Back and shop some more!</Typography>
      <Link to="/">
        <Button variant="contained" sx={{ marginTop: 2 }}>
          Go back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default CheckoutSuccess;
