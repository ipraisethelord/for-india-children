import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import theme from "../../styles/theme";

export default function BannerBox() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Paper
        sx={{
          p: 2,
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            "&:hover": {
              "& h1": {
                color: "white",
              },
              "& p": {
                color: "white",
              },
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            align="left"
            sx={{
              fontSize: "2rem", // Adjust the font size based on your preference
              [theme.breakpoints.down("md")]: {
                fontSize: "1.5rem",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "1rem",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "0.5rem",
              },
            }}
          >
            Behold, I will do a new thing; now it shall spring forth; shall ye
            not know it? I will even make a way in the wilderness, and rivers in
            the desert.
          </Typography>
          <Typography
            variant="body1"
            align="right"
            sx={{
              color: "#333",
              marginRight: "15px",
              fontSize: "1rem", // Adjust the font size based on your preference
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.8rem",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "0.7rem",
              },
            }}
          >
            Isaiah 43:19
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
