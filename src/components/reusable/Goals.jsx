import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Goals() {
  const theme = useTheme();
  const { xs, sm, md, lg, xl } = theme.breakpoints.values;
  const fontSize = {
    [xs]: "1rem",
    [sm]: "1.2rem",
    [md]: "1.5rem",
    [lg]: "1.8rem",
    [xl]: "2rem"
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          p: 2,
          width: 350,
          height: "auto",
          fontSize: fontSize
        }
      }}
    >
      <Paper elevation={3} sx={{ backgroundColor: "honeydew", textAlign: "center" }}>
        <Typography variant="h2">Goals</Typography>
        <Stack direction="row">
          <Typography variant="h6" sx={{ whiteSpace: 'nowrap' }}>Phase One:</Typography>
          <Typography variant="subtitle1" sx={{textAlign: 'left', pl:1}}>
            Completing the construction of the CBSE School
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography variant="h6" sx={{ whiteSpace: 'nowrap' }}>Phase Two:</Typography>
          <Typography variant="subtitle1" sx={{textAlign: 'left', pl: 1}}>
            Completing the construction of the CBSE School
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}


  //    <Goals />

