import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Copyright from "./Copyright";
function Footer() {
    const [value, setValue] = React.useState(0);
    return (
        <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
        <Copyright />
        </BottomNavigation>
      </Paper>
    );
};
export default Footer;