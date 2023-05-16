import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center"  component="p">
      {'Copyright © '}
      <Link color="inherit" to="https://www.buildschooltogther.com/">
        Build School Together
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}