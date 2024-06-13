import { Box, Button, Typography } from "@mui/material";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
const stripePromise = loadStripe(
  "pk_test_51PQS8TBayfxC7JbyYcy5hRQsthlp8sfpj73oUOLIphhlP1X9jtpVbFI2eASqiLnMTGFEwT75ZgYgzS2FVdmIV14b00riEH2umt"
);

const CheckOut = () => {
  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <Box sx={{ marginTop: 10 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          CheckOut
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Stripe Payment
        </Typography>
      </Box>
      <Box sx={{ padding: 4 }}>
        <form>
          <PaymentElement />
          <Button variant="contained" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Elements>
  );
};

export default CheckOut;
