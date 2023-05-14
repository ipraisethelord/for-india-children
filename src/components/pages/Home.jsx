import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Banner from "../banner";
import Promotions from "../promotions";
import Projects from "../projects";

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
