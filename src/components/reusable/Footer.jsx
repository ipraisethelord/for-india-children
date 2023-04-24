import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Copyright from "./Copyright";
import Typography from "@mui/material/Typography";
function Footer() {
    const [value, setValue] = React.useState(0);
    return (
        <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        {/* <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        > */}
           <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
             <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
       <Copyright />
        {/*  </BottomNavigation> */}
      </Paper>
    );
};
export default Footer;