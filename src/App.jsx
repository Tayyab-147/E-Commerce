import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./Layout/Themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./Components/Store/Store";
import Checkout from "./Pages/Checkout";
import CheckoutSuccess from "./Pages/CheckoutSuccess";

function App() {
  const [chosenTheme, setChosenTheme] = useState(lightTheme);
  const [check, setCheck] = useState(0);

  useEffect(() => {
    const storedTheme = localStorage.getItem("ToggleTheme");
    if (storedTheme) {
      setChosenTheme(storedTheme === "true" ? darkTheme : lightTheme);
    }
    setCheck(1);
  }, []);

  if (check === 0) {
    return "";
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={chosenTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar setChosenTheme={setChosenTheme} />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
