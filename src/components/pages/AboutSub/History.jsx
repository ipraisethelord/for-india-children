import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { HistoryContent } from "../../../data/writtings";
import { Colors } from "../../../styles/theme";
import React from "react";

function History() {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  let cardWidth = 300; // Default width for small screens
  let font = "h6";
  let imagePath = "/images/BreakEarth-small.jpg"; // Default image path for small screens

  if (isMediumScreen) {
    cardWidth = 700;
    font = "h5";
    imagePath = "/images/BreakEarth-700-650.jpg";
  }

  if (isLargeScreen) {
    cardWidth = 820;
    font = "h4";
    imagePath = "/images/BreakEarth-850-675.jpg"; // Image path for large screens
  }

  return (
    <Box
      sx={{
        bgcolor: Colors.light_gray,
      }}
      display="flex"
      alignContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 2,
            width: cardWidth,
          },
        }}
      >
        <Paper elevation={3} sx={{ padding: 7 }}>
          {HistoryContent.map((item, index) => (
            <React.Fragment key={index}>
              {index === 5 ? (
                <picture>
                  {isMediumScreen && (
                    <source
                      srcSet="/images/BreakEarth-700-650.jpg"
                      type="image/jpeg"
                    />
                  )}
                  <img
                    src={imagePath}
                    alt="Image"
                    style={{ width:{cardWidth}, height: "auto" }}
                  />
                </picture>
              ) : (
                <Typography variant={index === 0 ? font : "body1"} gutterBottom>
                  {item}
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}

export default History;
