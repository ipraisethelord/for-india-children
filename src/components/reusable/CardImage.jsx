import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardImage({ id, name, image, total }) {


  return (
    <>
    
      <Card sx={{ maxWidth: 400 }} key={id}>
       
         <CardMedia component='img'
            sx={{ height: 340 }}
            src={image}
            title={name}
            alt={name}
          />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project: {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total cost: {total}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

     