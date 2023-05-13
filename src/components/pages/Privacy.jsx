import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

function Privacy(){
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  
    let cardWidth = 300; // Default width for small screens
    let font="h6";
    if (isMediumScreen) {
      cardWidth = 700;
      font="h5";
    }
  
    if (isLargeScreen) {
      cardWidth = 820;
      font="h4";
    }
 
    return (
        <Stack
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 2,
            width:cardWidth,
          },
        }}
      >
      
         
            <Typography variant={font}
            gutterBottom>
            Website Disclaimer
            </Typography>
            <Typography variant="subtitle">
            DISCLAIMER:
            </Typography>
            <Typography variant="subtitle">
            NO CLIENT RELATIONSHIP IS FORMED BY ACCESSING OR USING ANY OF OUR PLATFORMS OR PURCHASING OR USING ANY OF OUR PRODUCTS.
            </Typography>
            <Typography variant="body1">We want to let you know that we value your trust and take your privacy seriously. By using any of our Platforms or purchasing our Products, you are agreeing to our Terms of Service and Privacy Policy. Please understand that any information you provide to us is not privileged or confidential. Our Platforms and Products are for educational and informational purposes only, and any results or statements about past performance are for example purposes only and are not a guarantee of any future results. We hope that our offerings can help you achieve your goals and we appreciate your support.</Typography>
            <Typography variant="body">
            © BuildSchoolTogether.org All Rights Reserved.
            </Typography>
        
      </Stack>
    );
  }

export default Privacy;