import React from "react";
import image from "../../assets/givealittlehelpalot.jpg";  //1500X800px  
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Toolbar  from "@mui/material/Toolbar";
const StyledPaper = styled(Paper)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  overflow: 'hidden',
  // backgroundImage: `url(${image})`
});

const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '20px',
  
});

function Home() {
  return (
    <>      
    {/* necessary to remove gap between header and main content*/}
     
      
           {/* <StyledPaper sx={{backgroundImage: `url(${image})`, width:'100%', height: 'auto'}}> */}
           <StyledPaper>
            {/* <h1>Give a little, help a lot</h1> */}
             <StyledImage src={image} alt='Give a little, help a lot' />
          </StyledPaper> 
        
    
      
    </>
  );
}

export default Home;
