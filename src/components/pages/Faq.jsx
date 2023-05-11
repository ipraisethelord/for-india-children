import { Card, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import { Colors } from "../../styles/theme";
 import FaqAccordian from "../reusable/FaqAccordian";
 import BannerBox from "../reusable/BannerBox";
export default function Faq() {
  
  return (
  <Box sx={{ bgcolor: Colors.light_gray, }} display="flex" flexDirection="column"> 
   
      <Container>
     
        <Typography variant="h3" marginTop={3} marginBottom={3}>
          Frequently Asked Questions
        </Typography>
        <Stack display="flex" direction ="row" alignItems="flex-start">
        <img src="/images/boy-reading.png" alt="boy reading" />
        <FaqAccordian />
      
        </Stack>
     
      </Container>
   
      </Box>

  );
}
 {/* 

import ChildrenImageList from "../reusable/ChildrenImageList";

 {/*  */}