import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Projects from "../projects";
import DonateProvider from "../donatePapal/donate-provider";
import Stack from "@mui/material/Stack";
import Background from "../background";
import DonationCard from "../reusable/donation-card";
import { Button } from "@mui/material";
import  AlbumChildren from "../reusable/AlbumChildren";
import Grid from "@mui/material/Grid";
export default function Donate(e) {
  const handleClick = (e) => {
   
    if(e.currentTarget.id==="donate"){

      window.location.href = 'https://www.ipmworld.org/donation-form.html';
    }else {
      window.location.href = 'https://www.ipmworld.org/general-giving.html';
    }
    // replace with your URL
  };
    return (
        <Background>
        
       
          <Stack display="flex" justifyContent="center" alignItems="center" >
          <Box display="flex" justifyContent="center"  alignItems="center">
            <Stack spacing={4}
             display="flex"
              // direction={{ xs: "column", sm: "column", md:"row" }}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box  sx={{paddingTop: 5}}>
                {/* <DonateProvider /> */}
                <Typography variant="h6">
                The buttons will redirect you to our mission 
                organization International Partnership Ministries, Inc.'s secure donation link. 
                To ensure that your donation is allocated to the Baptist Academy project in India, 
                please specify this in the comment section of the donation page. We appreciate your 
                generosity and thank you for your support towards providing a better education for children in need.
                </Typography>
               
              </Box>
              <Stack sx={{ display: 'flex', gap: 2 }}  direction={{ xs: "column", sm: "column", md:"row" }}>
                    <Button variant="contained" sx={{
                      width: { xs: '100%', md: 280 },
                      height: 40,
                      color: "white",
                      fontWeight: "bold"
                    }} id="donate" onClick={handleClick}>
                        Donate
                    </Button>
                    <Button variant="contained" sx={{
                      width: { xs: '100%', md: 280 },
                      height: 40,
                      color: "white",
                      fontWeight: "bold"
                    }} id="paypal" onClick={handleClick}>
                        Donate by Paypal
                    </Button>
              </Stack>
              <Box >
                <DonationCard />
              </Box>
            </Stack>
          </Box>
          <Box display="flex">
           < AlbumChildren />
           </Box>
        </Stack>
  
       
      </Background>
    );
  }
 