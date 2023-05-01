import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
//import ChildrenImageList from "../reusable/ChildrenImageList";
import AlbumChildren from "../reusable/AlbumChildren";
import { Typography } from "@mui/material";
import { Colors } from "../../styles/theme";
import DonateModal from "../reusable/DonateModal";
import DonateForm from "../papalDonate/donateForm";
function About() {
  return (
 
      
   <Box sx={{ bgcolor: Colors.light_gray, pl:10 , pt: 5, pr: 10, pb: 10 }} display="flex" minHeight="100vh"  >
    <Stack>
      <Typography variant="body1" >
      Welcome to our website! We are a dedicated team of individuals who are passionate about educating and empowering people. Our primary goal is to serve the community through education, and we are proud to be a ministry under the South India Baptist Bible College & Seminary. Our mission is to help children in India achieve their full potential in life by providing them with an extraordinary academic environment for learning and development of life skills.
Our vision is to equip and empower our students for transformational living so that they can impact the world in a significant way. At Baptist Academy, we aim to challenge, encourage, and train our students towards holistic development, rooted in love, justice, and trust, with respect for the dignity of life and the spirit of hope. We believe that by sowing the seeds of potential, our students can achieve their full human potential and become able leaders with the ability, knowledge, understanding, and responsibility in various fields.
We believe that every child deserves the opportunity to reach their full potential and have a love for learning. However, this can only be achieved with the support of our community. That is why we have created this website to bring people together and raise funds to build the school. We invite you to join us in our mission to provide quality education to the children of India and help them become future leaders who can make a positive impact in the world. Thank you for your support!

      </Typography>
      <AlbumChildren />
      <DonateModal />
      <DonateForm />
    </Stack>

   </Box>

  );
}

export default About;

