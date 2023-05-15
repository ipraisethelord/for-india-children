import { Box, Paper, Typography, useMediaQuery, Divider, Stack } from "@mui/material";
import { AMiracleWellContent } from "../../../data/writtings";
import { Colors } from "../../../styles/theme";
import React from "react";

function Well() {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  let cardWidth = 300; // Default width for small screens
  let font = "h6";
  let imagePaths = [
    "/images/drill1.jpg", // Image path for index 2
    "/images/drill2.jpg", // Image path for index 4
    "/images/drill3.jpg", // Image path for index 6
  ];

  if (isMediumScreen) {
    cardWidth = 700;
    font = "h5";
  }

  if (isLargeScreen) {
    cardWidth = 820;
    font = "h4";
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
          {AMiracleWellContent.map((item, index) => (
            <Typography
              key={index}
              variant={index === 0 ? font : "body1"}
              gutterBottom
            >
              {item}
            </Typography>
          ))}
          <Divider />
          <Typography variant="h6" sx={{p:5}}>
            New well drilled on February 23, 2023
          </Typography>
          <Stack id="pic" spacing={2}>
            {imagePaths.map((imagePath, index) => (
              <img
                key={index}
                src={imagePath}
                alt={`Image ${index + 1}`}
                style={{ width: "100%", maxWidth: "100%" }}
              />
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}

export default Well;
