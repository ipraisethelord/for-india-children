import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";


export default function CardCategory({ category }) {
  return (
    <Grid item xs={4} md={3} lg={3}>
   
        <Paper elevation={3} className="paper" key={category.id}>
          <img src={category.image} alt="" className="img" width="300" />
          <Box
            sx={{
              paddingX: 1,
            }}
          >
            <Typography variant="subtitle1" component="h2">
              {category.name}
            </Typography>
                  
              <Typography variant="subtitle2" component="h2" marginLeft={0.5}>
                Estimated Total {category.total} 
              </Typography>           
             
          
          </Box>
        </Paper>
    
    </Grid>
  );
}