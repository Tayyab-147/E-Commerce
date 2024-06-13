import { Box, Typography } from "@mui/material";
import React from "react";

const MainHomeBannerImage = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage:
            "url('https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/slider/slide1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "flex",
          paddingLeft: 15,
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">Home</Typography>
      </Box>
    </>
  );
};

export default MainHomeBannerImage;
