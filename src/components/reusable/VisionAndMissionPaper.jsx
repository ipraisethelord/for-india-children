import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import theme from "../../styles/theme";

export default function VisionAndMissionPaper({ item, content }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          p: 5,
          width: "300px", // Set width to 300px for mobile devices
          height: "auto",
          [theme.breakpoints.up("sm")]: {
            width: "400px", // Set width to 400px for desktop devices and larger
          },
        },
      }}
    >
      <Paper elevation={3} sx={{ backgroundColor: alpha("#f0fff0", 0.5), textAlign: "center" }}>
        <Typography variant="h2">{item}</Typography>
        <Typography align="left">{content}</Typography>
      </Paper>
    </Box>
  );
}
