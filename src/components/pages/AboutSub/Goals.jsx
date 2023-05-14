import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";

export default function Goals()
{

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let boxWidth = "300px";
  let boxPadding = 2;
  let fontSize = "h5";

  if (isMediumScreen) {
    boxWidth = "400px";
    boxPadding = 3;   
    fontSize ="h3"
  }

  if (isLargeScreen) {
    boxWidth = "500px";
    boxPadding = 4;
   
    fontSize="h2"
  } 
  return (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
            justifyContent: "center",
            "& > :not(style)": {
              p: 2,
              width: boxWidth,
              height: "auto",
              fontSize: fontSize,
            },
          }}
        >
          <Paper elevation={3} sx={{  backgroundColor: alpha("#f0fff0", 0.5), textAlign: "center" }}>
            <Typography variant="h2">Goals</Typography>
            <Stack direction="row">
              <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                Phase One:
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: "left", pl: 1 }}>
                Completing the construction of the CBSE School
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                Phase Two:
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: "left", pl: 1 }}>
                Completing the construction of the CBSE School
              </Typography>
            </Stack>
          </Paper>
        </Box>
      )
}
 
