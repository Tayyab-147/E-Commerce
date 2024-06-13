import React, { useState } from "react";
import { FormControlLabel, IconButton, Tooltip } from "@mui/material";
import { createTheme, useTheme } from "@mui/material";
import { lightTheme, darkTheme } from "../Layout/Themes";
import { Brightness2Outlined, LightModeOutlined } from "@mui/icons-material";

const ThemeToggleIcon = ({ isHomePage, isTop, setChosenTheme }) => {
  const theme = useTheme();
  const [toggleTheme, setToggleTheme] = useState(
    localStorage.getItem("ToggleTheme") === "true"
  );

  const themeChoice = (e, toggleTheme) => {
    e.preventDefault();
    e.stopPropagation();
    const newTheme = toggleTheme ? darkTheme : lightTheme;
    setChosenTheme(createTheme(newTheme));
    setToggleTheme(toggleTheme);
    localStorage.setItem("ToggleTheme", toggleTheme.toString());
  };

  return (
    <>
      <Tooltip title="Light/Dark Mode" placement="top">
        <FormControlLabel
          sx={{ margin: 0, marginLeft: 0.7 }}
          control={
            <IconButton
              onClick={(e) => themeChoice(e, !toggleTheme)}
              aria-label="toggle theme"
              sx={{
                color:
                  isTop && isHomePage ? "black" : theme.customStyles.typoCustom,
                transition: `background-color 1s, color 1s, opacity 1s, paddingY 2s ease-in-out, transform 0.5s`,
              }}
            >
              {toggleTheme ? (
                <LightModeOutlined sx={{ fontSize: 28 }} />
              ) : (
                <Brightness2Outlined sx={{ fontSize: 28 }} />
              )}
            </IconButton>
          }
          label=""
          labelPlacement="start"
        />
      </Tooltip>
    </>
  );
};

export default ThemeToggleIcon;
