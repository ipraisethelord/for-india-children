import React from "react";
import Box from "@mui/material/Box";
import { Colors } from "../../../styles/theme";
import Typography from "@mui/material/Typography";
//import Projects from "../projects";
//import DonateProvider from "../donatePapal/donate-provider";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import DonationCard from "../../reusable/donation-card";
import { Button } from "@mui/material";
import  AlbumChildren from "../../reusable/AlbumChildren";
import WhyDonateComponent from "./WhyDonateUs";
import { DonateBlurb } from "../../../data/writtings";
export default function DonationPageDesk(e) {
  const handleClick = (e) => {
    if (e.currentTarget.id === "donate") {
      window.location.href = 'https://www.ipmworld.org/donation-form.html';
    } else {
      window.location.href = 'https://www.ipmworld.org/general-giving.html';
    }
  };
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const plea = DonateBlurb.map((item) => (
    <Typography variant="h6" key={item}>{item}</Typography>
  ));
  

  const linkPaypal = (
    <Button variant="contained" sx={{
      width: { xs: '100%', md: 210 },
      height: 40,
      color: "white",
      fontWeight: "bold"
    }} id="paypal" onClick={handleClick}>
      Donate by Paypal
    </Button>
  );

  const linkCredit = (
    <Button variant="contained" sx={{
      width: { xs: '100%', md: 210 },
      height: 40,
      color: "white",
      fontWeight: "bold"
    }} id="donate" onClick={handleClick}>
      Donate
    </Button>
  );

  const buttonsSection = (
    <Stack display="flex"  direction={isMediumScreen ? "column" : "row"} justifyContent="center" alignItems="center">
      <Box m={3}>{linkCredit}</Box>
      <Box m={3}>{linkPaypal}</Box>
    </Stack>
  );

  const card = <DonationCard />;

  const topButton = (
    <Stack display="flex"  p={5}  justifyContent="center" justifyItems="center">
      {plea}
      {buttonsSection}
    </Stack>
  );

  const topCard = (
    <Box display="flex"  padding={5}  justifyContent="center" justifyItems="center"  >
     
      {card}
    </Box>
  );

  return (
  
      <Stack display="flex" justifyContent="center" justifyItems="center" bgcolor={Colors.light_gray}>
       {topButton}
        {topCard}
        <Box display="flex" justifyContent="center" justifyItems="center"> <WhyDonateComponent /> </Box>
       <Typography variant="h4">These Students Needs Your Support!</Typography>
        <AlbumChildren />
      </Stack>
   
  );
}
