import { useTheme } from "@mui/material";

export const appBarStyle = (isTop, isHomePage) => {
  const theme = useTheme();
  return {
    backgroundColor: isTop ? "transparent" : theme.customStyles.bgCustom,
    color: isTop && isHomePage ? "black" : theme.customStyles.typoCustom,
    paddingY: isTop ? "8px" : "4px",
    boxShadow: isTop ? "none" : "",
    // paddingX: { xs: "3%", md: "6%", lg: "10%" },
    transform: isTop ? "translateY(0)" : "translateY(-7%)",
    zIndex: 100,
    transition: `background-color 1s, color 1s, opacity 1s, paddingY 2s ease-in-out, transform 0.5s`,
    backgroundImage: "none",
  };
};

export const typoHoverStyle = {
  cursor: "pointer",
  color: "inherit",
  fontWeight: "bold",
};

export const drawerTypo = {
  cursor: "pointer",
  "&:hover": { color: "rgb(0, 144, 241)" },
  display: { xs: "block", md: "none" },
  alignItems: "center",
};
