import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/1banner.png" />
      <BannerContent>
        <Typography variant="h6"> Make a difference with your gifts!</Typography>
        <BannerTitle variant="h4">
       Any help counts! 
        </BannerTitle>
{/* Any help is a help! */}
        <BannerDescription variant="subtitle">
        Your generous giving can help us complete the Baptist Academy CBSE school. No matter how small or large, every donation counts! With your support, we can unlock the limitless potential of these students and make a lasting difference.

        </BannerDescription>

        <BannerShopButton color="primary">Donate Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
