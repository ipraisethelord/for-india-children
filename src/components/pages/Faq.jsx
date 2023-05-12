import { Card, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import { Colors } from "../../styles/theme";
import FaqAccordian from "../reusable/FaqAccordian";
import theme from "../../styles/theme";
import { styled } from "@mui/system";
export default function Faq() {

  const StyledImage = styled("img")({
    width: "100%",
    "@media (minWidth: 600px)": {
      minWidth: "30%",
    },
    "@media (minWidth: 960px)": {
      minWidth: "70%", 
    },
    "@media (minWidth: 1280px)": {
      minWidth: "100%", 
    },
  })  ;
  return (
    <Box
      sx={{ bgcolor: Colors.light_gray }}
      display="flex"
      flexDirection="column"
    >
      <Container>
        <Typography variant="h3" marginTop={3} marginBottom={3}>
          Frequently Asked Questions
        </Typography>
        <Stack
          display="flex"
          direction={{ xs: "column", md: "row" }}
          alignItems="flex-start"
        >  <StyledImage src="/images/boy-reading.png" alt="boy reading" />
          <FaqAccordian />
        
        
        </Stack>
      </Container>
    </Box>
  );
}


