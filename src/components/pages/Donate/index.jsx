import { Box, Button, Container, Grid } from "@mui/material";


import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import DonationPageDesk from "./DonationPageDesk";
import DonationPageMobile from "./DonationPageMobile"

export default function Donate() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
 
  let page =  <DonationPageDesk />;
        if(isMobile){
            page = <DonationPageMobile />;
        }
      
  return page;
}
