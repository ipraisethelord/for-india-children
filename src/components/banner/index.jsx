import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
} from "../../styles/banner";
import {
  PayPalScriptProvider,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import ButtonWrapper from "../donate";


export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
 

  return (
    <BannerContainer>
      <BannerImage src="/images/banner/1banner.png" />
      <BannerContent>
        <Typography variant="h6">
          Make a difference with your gifts!
        </Typography>
        <Typography variant="h4" gutterBottom>
          Any help counts!
        </Typography>
        {/* Any help is a help! */}
        <BannerDescription variant="subtitle">
          Your generous giving can help us complete the Baptist Academy CBSE
          school. No matter how small or large, every donation counts! With your
          support, we can unlock the limitless potential of these students and
          make a lasting difference.
        </BannerDescription>
       
          <ButtonWrapper currency={"USD"} />
       
      </BannerContent>
    </BannerContainer>
  );
}
