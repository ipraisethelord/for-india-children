import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function MyImageCard({source, name}) {
  return (
    <Paper elevation={3} key={name} sx={{ backgroundColor: '#000', width: '310px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src={source}
        alt={name}
        width="310"
        style={{ borderRadius: '10px' }}
      />
    </Paper>
  );
}
