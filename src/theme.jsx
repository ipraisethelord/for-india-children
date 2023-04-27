import { createTheme } from '@mui/material/styles';
import { red, green, blue,  purple } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue.A100,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    info: {
        main: purple[800],
    },
    success: {
        main: green[500],
    },
  },
  // components: {
  //   MuiTypography: {
  //     variants: [
  //       {
  //         props: { variant: "body1",},
  //         style: { fontsize: 14,
  //                   color:"cornflowerblue"},
  //       },
  //       {
  //         props: { variant: "body2",},
  //         style: { fontsize: 12,
  //                   color:"crimson"}
  //       },
       
  //     ]
  //   }
  // },
});

export default theme;