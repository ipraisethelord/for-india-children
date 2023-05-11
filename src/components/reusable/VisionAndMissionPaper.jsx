import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
            width: 400,
            height: "auto"
        }
      }}
    >
      <Paper elevation={3} sx={{ backgroundColor: "honeydew" }}>
        <Typography variant="h2">{item}</Typography>
        <Typography>{content}</Typography>
      </Paper>
    </Box>
  );
}


//      <VisionAndMissionPaper content="This is my world" item="Vision" />

