import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DonationMessage } from '../../data/writtings/';
import { useMediaQuery } from '@mui/material';

export default function DonationCard() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  let cardWidth = 300; // Default width for small screens

  if (isMediumScreen) {
    cardWidth = 700;
  }

  if (isLargeScreen) {
    cardWidth = 820;
  }

  return (
    <Card sx={{ maxWidth: cardWidth }}>
      <CardMedia
        component="img"
        alt="unfinished school"
        height="400"
        image="/images/projects/schoolBuilding.jpg"
      />
      <CardContent style={{ height: 'auto' }}>
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
