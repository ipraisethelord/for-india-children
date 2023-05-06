import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
//import Projects from "../projects";
import DonateProvider from "../donatePapal/donate-provider";
import Stack from "@mui/material/Stack";
import Background from "../background";
import DonationCard from "../reusable/donation-card";

function Donate() {
    return (
        <Background>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="center" >
            <Stack spacing={4}
            
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="stretch"
            >
              <Box  sx={{paddingTop: 0}}>
                <DonateProvider />
              </Box>
              <Box >
                <DonationCard />
              </Box>
            </Stack>
          </Box>
        </Container>
      </Background>
    );
  }
  export default Donate;