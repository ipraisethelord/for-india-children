import React from "react";
import Box from "@mui/material/Box";
import AlbumCategory from "../reusable/AlbumCategory";
import givealittlehelpalot from "../../assets/givealittlehelpalot.jpg"; //1500X800px
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardCategory from "../reusable/CardCategory.jsx";
import CardImage from "../reusable/CardImage";
import categoryItems from "../../assets/data/data.json";
import Banner from "../banner";
import Promotions from "../promotions";
import Projects from "../projects";
//import CategoryImageData from "../reusable/CategoryImageData";

function Home() {
  return (
    <>  
    
     <Banner />  
     <Promotions />
   
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h4">Projects</Typography>
      </Box>
      <Projects />
   
    </>
  );
}

export default Home;
