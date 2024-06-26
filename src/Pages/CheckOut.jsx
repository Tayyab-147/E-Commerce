import { Box, Button, Typography } from "@mui/material";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(
  "pk_test_51PQS8TBayfxC7JbyYcy5hRQsthlp8sfpj73oUOLIphhlP1X9jtpVbFI2eASqiLnMTGFEwT75ZgYgzS2FVdmIV14b00riEH2umt"
);

const CheckoutForm = ({ subTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/checkout-success",
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <Typography sx={{ marginTop: 2 }}>
          Amount to be deducted: <b>${subTotal}</b>
        </Typography>
        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: 2 }}
          disabled={processing}
        >
          {processing ? "Processing..." : "Submit"}
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </Box>
  );
};

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const items = useSelector((state) => state.items);
  const subTotal = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  localStorage.setItem("subTotal", subTotal);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post("http://localhost:5000/create-payment-intent", {
        amount: subTotal * 100,
      })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      });
  }, []);

  const handleSuccess = () => {
    setPaymentSucceeded(true);
  };

  const options = {
    clientSecret,
    appearance: {
      /*...*/
    },
  };

  return (
    clientSecret &&
    !paymentSucceeded && (
      <Elements stripe={stripePromise} options={options}>
        <Box sx={{ marginTop: 10 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Checkout
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Stripe Payment
          </Typography>
        </Box>
        <CheckoutForm onSuccess={handleSuccess} subTotal={subTotal} />
      </Elements>
    )
  );
};

export default Checkout;
