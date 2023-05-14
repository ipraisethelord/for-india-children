import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import theme from "../../../styles/theme";
import { useMediaQuery } from "@mui/material";

export default function CoreValues() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let boxWidth = "300px";
  let boxPadding = 2;
  let font = "h5";
  let boxMargin= 2;

  if (isMediumScreen) {
    boxWidth = "400px";
    boxPadding = 3;
   
    font ="h3"
  }

  if (isLargeScreen) {
    boxWidth = "500px";
    boxPadding = 4;
   
    font="h2"
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          p: boxPadding,
          width: boxWidth,
          height: "auto",
        },
      }}
    >
      <Paper elevation={3} sx={{ backgroundColor: alpha("#f0fff0", 0.5), textAlign: "center" }}>
        <Typography variant="h2">Core Values</Typography>
        <Typography >Excellence in everything we do</Typography>
        <Typography >Practicing Servant Leadership</Typography>
        <Typography >Fostering Commitment</Typography>
        <Typography > Embracing Opportunity & Showing Respect</Typography>
      </Paper>
    </Box>
  );
}
