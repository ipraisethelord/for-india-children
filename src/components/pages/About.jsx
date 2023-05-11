import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Grid  from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import  VisionAndMissionPaper from "../reusable/VisionAndMissionPaper";
import Goals from "../reusable/Goals.jsx";
import { VisionContent, MissionContent} from "../../data/writtings";

import { styled } from '@mui/material/styles';
function About() {
  const StyledItem = styled(Paper)(({ theme }) => ({
  
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 
 
    return (
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <Typography>1</Typography>
          </Grid>
          <Grid item xs={6}>
           <VisionAndMissionPaper item="Vision" content="Our vision is to establish a self-sufficient Baptist Academy Group of Schools in a timely manner, ensuring a quality education for generations to come without the need for further funding." />
          </Grid>
          <Grid item xs={6}>
          <Typography>2</Typography>
          </Grid>
          <Grid item xs={6}>
          <VisionAndMissionPaper item="Mission" content="Our mission is to fund the construction of the Baptist Academy Group of Schools, providing exceptional learning environments that equip students with the necessary skills to succeed in life." />
          </Grid>
          <Grid item xs={6}>
         <img src="/images/girl-reading.png" alt="girl reading" />
          </Grid>
          <Grid item xs={6}>
          <Goals />
          </Grid>
        </Grid>
      </Box>
    );
  }

export default About;

