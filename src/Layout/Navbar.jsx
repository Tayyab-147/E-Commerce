import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CategoriesDropdown from "../Components/CategoriesDropdown";
import ProductsDropdown from "../Components/ProductsDropdown";
import PagesDropdown from "../Components/PagesDropdown";
import Logo from "../assets/Logo.png";
import { appBarStyle, typoHoverStyle } from "../Styles/Navbar_Styles";
import DrawerMenu from "../Components/DrawerMenu";
import ThemeToggleIcon from "../Components/ThemeToggleIcon";
import SearchBar from "../Components/SearchBar";
import { BiHeart } from "react-icons/bi";
import { IconButton } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import Cart from "../Components/Cart";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setChosenTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  function handleScroll() {
    const scrollLocation = window.scrollY;
    setIsTop(scrollLocation === 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      title: "Home",
    },
    {
      title: "Categories",
    },
    {
      title: "Products",
    },
    {
      title: "Pages",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={appBarStyle(isTop, isHomePage)}>
        <Toolbar>
          <DrawerMenu
            navItems={navItems}
            isTop={isTop}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
          <Box
            component="img"
            src={Logo}
            sx={{
              width: 60,
              height: 60,
            }}
          />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              marginLeft: "10%",
              gap: 2.5,
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography sx={typoHoverStyle}>HOME</Typography>
            </Link>
            <CategoriesDropdown />
            <ProductsDropdown />
            <PagesDropdown />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { md: 1, xs: 0 },
              marginLeft: "auto",
            }}
          >
            <SearchBar />
            <ThemeToggleIcon
              isHomePage={isHomePage}
              isTop={isTop}
              setChosenTheme={setChosenTheme}
            />
            <IconButton
              color="inherit"
              aria-label="Wishlist"
              sx={{ fontSize: 30 }}
            >
              <BiHeart />
            </IconButton>
            <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <IconButton color="inherit" aria-label="Account">
              <AccountCircleOutlined sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
