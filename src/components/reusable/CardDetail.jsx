import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";


export default function CardDetail({ category }) {
  return (
    <Grid item xs={4} md={3}>
   
        <Paper elevation={3} className="paper">
          <img src={category.image} alt="" className="img" />
          <Box
            sx={{
              paddingX: 1,
            }}
          >
            <Typography variant="subtitle1" component="h2">
              {category.item}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >             
              <Typography variant="subtitle2" component="h2" marginLeft={0.5}>
                Estimated price ${category.price} 
              </Typography>
              <Typography variant="subtitle2" component="h2" marginLeft={0.5}>
                Quantity : {category.quantity}
              </Typography>
             
            </Box>
          
          
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography variant="h6" component="h2" marginTop={0}>
              Total Cost: ${category.total}
              </Typography>
            </Box>
          </Box>
        </Paper>
    
    </Grid>
  );
}