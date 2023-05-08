import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Box from "@mui/material/Box";

import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
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
        <Typography variant="h5">
          Make a difference with your gifts!
        </Typography>
        <Typography variant="h3" >
        Together, we can do it!
        </Typography>
        {/* Any help is a help! */}
        <BannerDescription variant="subtitle">
        We need to raise half a million dollars to complete the Baptist Academy CBSE school building that will be home to 750 students. With 30 classrooms, two computer labs, a dining area, two school buses, and a basketball court, the school will provide a great educational environment for students. It will also have a security wall and a well with a water treatment plant to ensure the students' safety and health. Your donation will directly contribute to building this school, which will have a significant impact on the children's lives. The cost of building the school is lower in India, and a small donation from you can make a huge difference. The school will be self-supporting through tuition fees and will give many children the opportunity to break the cycle of poverty and build a better future. We promise complete financial transparency, with no money going to management or organizers. Every penny you donate will go towards the benefit of the children. 
        </BannerDescription>
        <Button component={Link} to="/donate" variant="contained" color="primary" sx={{color:"white", fontWeight:"bold", fontSize:18}}>Doante Now</Button>
         
         
     
      </BannerContent>
    </BannerContainer>
  );
}
