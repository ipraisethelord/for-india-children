import React from "react";
import givealittlehelpalot from "../../assets/givealittlehelpalot.jpg"; //1500X800px
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardCategory from "../reusable/CardCategory.jsx";
import CardImage from "../reusable/CardImage";
import categoryItems from "../../assets/data/data.json";
import AlbumCategory from "../reusable/AlbumCategory";
//import CategoryImageData from "../reusable/CategoryImageData";
// const StyledPaper = styled(Paper)({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: "20px",
//   overflow: "hidden"
//   // backgroundImage: `url(${image})`
// });

// const StyledImage = styled("img")({
//   width: "100%",
//   height: "auto"
//   //borderRadius: '20px',
// });

function Home() {
  return (
    <>
      {/* <StyledPaper>
          
             <StyledImage src={givealittlehelpalot} alt='Give a little, help a lot' />
    </StyledPaper> 
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}    direction="row"
  justifyContent="center"
  alignItems="center"
 >
   
         {categoryItems.map((cat) => (
         
         <Grid item xs={2} sm={3} md={3} key={cat.id} mt="25" >
        
           <CardCategory category={cat} key={cat.id}/>
        
       </Grid>
         
   ))}
      </Grid>
      
     */}
      <Box display="flex" bgcolor="lightblue">
        <AlbumCategory />
      </Box>
    </>
  );
}

export default Home;
