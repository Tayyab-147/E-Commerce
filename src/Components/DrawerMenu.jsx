import React from "react";
import { Box, Drawer, IconButton, Typography, useTheme } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { drawerTypo } from "../Styles/Navbar_Styles";

const DrawerMenu = ({ navItems, isTop, mobileOpen, setMobileOpen }) => {
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = useTheme();

  const drawerAnimation = useSpring({
    transform: mobileOpen ? `translateX(0%)` : `translateX(-100%)`,
    opacity: mobileOpen ? 1 : 0,
  });

  const hamStyle = {
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    transition: "transform 1000ms",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none",
  };

  const lineStyle = {
    fill: "none",
    transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms",
    stroke:
      isTop && mobileOpen && theme.palette.mode === "dark"
        ? "white"
        : isTop
        ? "black"
        : theme.customStyles.typoCustom.color,
    strokeWidth: 5.5,
    strokeLinecap: "round",
  };

  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none", marginRight: 20 } }}>
        <svg
          style={{
            ...hamStyle,
            transform: mobileOpen ? "rotate(0deg)" : "rotate(0deg)",
          }}
          viewBox="0 0 100 100"
          width="40"
          onClick={handleDrawerToggle}
        >
          <path
            style={{
              ...lineStyle,
              strokeDasharray: "40 121",
              strokeDashoffset: mobileOpen ? "-102px" : "0px",
            }}
            d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
          />
          <path
            style={{
              ...lineStyle,
            }}
            d="m 30,50 h 40"
          />
          <path
            style={{
              ...lineStyle,
              strokeDasharray: "40 121",
              strokeDashoffset: mobileOpen ? "-102px" : "0px",
            }}
            d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
          />
        </svg>
      </Box>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="left"
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "250px",
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
            <IconButton size="small">
              <Box>
                <svg
                  style={{
                    ...hamStyle,
                    transform: mobileOpen ? "rotate(0deg)" : "rotate(0deg)",
                  }}
                  viewBox="0 0 100 100"
                  width="40"
                  onClick={handleDrawerToggle}
                >
                  <path
                    style={{
                      ...lineStyle,
                      strokeDasharray: "40 121",
                      strokeDashoffset: mobileOpen ? "-102px" : "0px",
                    }}
                    d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
                  />
                  <path
                    style={{
                      ...lineStyle,
                    }}
                    d="m 30,50 h 40"
                  />
                  <path
                    style={{
                      ...lineStyle,
                      strokeDasharray: "40 121",
                      strokeDashoffset: mobileOpen ? "-102px" : "0px",
                    }}
                    d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
                  />
                </svg>
              </Box>
            </IconButton>
            <Box className="flex flex-col gap-5 p-4 ml-2">
              {navItems.map((navItem, index) => (
                <Typography key={index} sx={drawerTypo}>
                  {navItem.title}
                </Typography>
              ))}
            </Box>
          </Box>
        </animated.div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
