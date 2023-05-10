import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function StudentTestimonyCard(props) {
  const [elevation, setElevation] = useState(1);
  const [color, setColor] = useState('white');

  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: color, boxShadow: elevation === 4 ? 4 : 1 }}
      elevation={elevation}
      onMouseOver={() => {setElevation(4); setColor('#b3e5fc')}}
      onMouseOut={() => {setElevation(1); setColor('white')}}
    >
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.testimony}
        </Typography>
      </CardContent>
    </Card>
  );
}
