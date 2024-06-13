import { Typography } from "@mui/material";
import React from "react";
import MainHomeBannerImage from "../Components/MainHomeBannerImage";
import HotItems from "../Components/HotProducts";

const Home = () => {
  return (
    <>
      <MainHomeBannerImage />
      <HotItems />
      <Typography sx={{ marginTop: 10, textAlign: "center" }}>
        Footer
      </Typography>
    </>
  );
};

export default Home;
