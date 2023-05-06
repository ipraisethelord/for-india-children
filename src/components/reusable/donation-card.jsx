import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DonationMessage } from '../../data/writtings/';

export default function DonationCard() {
  return (
    <Card sx={{maxWidth: 600}}>
      <CardMedia
        component="img"
        alt="unfinished school"
        height="240"
        image="/images/projects/schoolBuilding.jpg"
      />
      <CardContent style={{ height: "auto" }}>
        <Typography gutterBottom variant="h5" component="div">
          Build School Together
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <DonationMessage />
        </Typography>
      </CardContent>
    </Card>
  );
}
