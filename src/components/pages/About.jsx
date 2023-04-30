import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
//import ChildrenImageList from "../reusable/ChildrenImageList";
import AlbumChildren from "../reusable/AlbumChildren";
import { Typography } from "@mui/material";
import { Colors } from "../../styles/theme";
function About() {
  return (
 
      
   <Box sx={{ bgcolor: Colors.light_gray, pt:2,pl:10 }} display="flex" minHeight="100vh"  >
    <Stack>
      <Typography variant="h4" >
              it about them
      </Typography>
      <AlbumChildren />
    </Stack>
   </Box>

  );
}

export default About;

