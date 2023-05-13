import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Box from "@mui/material/Box";

import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,

} from "../../styles/banner";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
 

  return (
  
    <BannerContainer alignItems={"flex-start"}>
     
      <BannerImage src="/images/banner/1banner.png" />
  
      <BannerContent sx={{paddingTop:0}}>
        <Typography variant="h6">
        Impact with your gifts!
        </Typography>
        <BannerTitle variant="h4" >
        Let's finish it!
        </BannerTitle>
        {/* Any help is a help! */}
        <BannerDescription variant="subtitle">
        Help us complete the Baptist Academy CBSE school building, providing 750 students with a quality education. With 30 classrooms, computer labs, a dining area, buses, a basketball court, and safety measures, your donation directly impacts children's lives. In India, your small donation goes a long way. The school will be self-sustaining, empowering children to break the cycle of poverty. Rest assured, every penny benefits the children. 
        </BannerDescription>
        <Button component={Link} to="/donate" variant="contained" color="primary" sx={{color:"white", fontWeight:"bold", fontSize:18}}>Doante Now</Button>
         
       
      </BannerContent>
    </BannerContainer>

  );
}