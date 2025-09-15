import { useState, useEffect, useContext } from "react";
import { Box, Typography, styled, useTheme } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../../../../theme/ThemeProvider";

function Modechanger() {
  const [mode, setMode] = useState(true);

  const setTheme = useContext(ThemeContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem("Claimapptheme");
    if (storedTheme === "GreyGooseTheme") {
      setMode(false);
    }
  }, []);

  const handleModeChange = (e: boolean) => {
    setMode(e);
    if (!mode) {
      localStorage.setItem("Claimapptheme", "NebulaFighterTheme");
      setTheme("NebulaFighterTheme");
    } else {
      localStorage.setItem("Claimapptheme", "GreyGooseTheme");
      setTheme("GreyGooseTheme");
    }
  };
  const MenuBox = styled(Box)(
    ({ theme }) => `
   
          background: ${theme.colors.alpha.black[10]};
          padding: ${theme.spacing(0.5)};
          color: ${theme.colors.alpha.black[100]};
  
  `
  );
  const theme = useTheme();
  return (
    
      <MenuBox
        sx={{
          minWidth: 210,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          p: 1,
          ":hover": {
            bgcolor: theme.palette.action.hover,
          },
        }}
        onClick={() => handleModeChange(!mode)}
      >
        <Typography variant="h4">Theme</Typography>

        {mode ? <DarkModeIcon /> : <LightModeIcon />}
      </MenuBox>
   
  );
}

export default Modechanger;
