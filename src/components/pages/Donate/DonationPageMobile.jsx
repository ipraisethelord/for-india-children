import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Colors } from "../../../styles/theme";
import DonationCard from "../../reusable/donation-card";
import { Button } from "@mui/material";
import AlbumChildren from "../../reusable/AlbumChildren";
import WhyDonateComponent from "./WhyDonateUs";
import { DonateBlurb } from "../../../data/writtings";

import { Link} from "react-router-dom";


export default function DonationPageMobile(e) {
  const handleClick = (e) => {
    if (e.currentTarget.id === "donate") {
      window.location.href = "https://www.ipmworld.org/donation-form.html";
    }
    //  else {
    //   //window.location.href = "https://www.ipmworld.org/general-giving.html";
    //   window.location.href='donate-paypal';
    // }
  };

  return (
    <Stack display="flex" justifyContent="center" alignItems="center" bgcolor={Colors.light_gray}>
      <Box sx={{ padding: 5 }}>
        {DonateBlurb.map((item) => (
          <React.Fragment key={item}>{item}</React.Fragment>
        ))}
      </Box>
      <Stack sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%" },
            height: 40,
            color: "white",
            fontWeight: "bold",
          }}
          id="donate"
          onClick={handleClick}
        >
          Donate
        </Button>
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", md: 210 },
            height: 40,
            color: "white",
            fontWeight: "bold",
          }}
          id="paypal"
          component={Link}
          to="/donate-paypal"
        >
          Donate by Paypal
        </Button>
      </Stack>
      <Box display="flex" mt={2}>
        <DonationCard />
      </Box>
      <Box display="flex" justifyContent="center" justifyItems="center">
        {" "}
        <WhyDonateComponent />{" "}
      </Box>
      <Typography variant="h6">These Students Needs Your Support!</Typography>
      <AlbumChildren />
    </Stack>
  );
}
