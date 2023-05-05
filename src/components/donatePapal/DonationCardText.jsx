import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DonationCardText({children}) {
  return (
    <Card
        sx={{ width: {
                      sx: 1.0, // 100%
                      sm: 250,
                      md: 350,
                    },
             }}
    >
      <CardMedia
        sx={{ height: 140, width:300 }}
        image="/images/projects/schoolBuilding.jpg"
        title="unfinished school building"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Donate to build the Baptist Academy CBSE School
        </Typography>
        <Typography variant="body2" color="text.secondary">
        You are empowering the next generation to reach their full potential and 
          make a lasting impact on the world. Your donation will directly go to build the school. Thank you for being a part of something truly meaningful.
        </Typography>
      </CardContent>
      {children}
      
    </Card>
  );
}
