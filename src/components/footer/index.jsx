import {
  Grid,
  List,
  ListItemText,
  Typography,

} from "@mui/material";
import  Box  from "@mui/material/Box";
import { Colors } from "../../styles/theme";
import { FooterTitle } from "../../styles/footer";

import { Link } from "react-router-dom";
export default function Footer() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '00a2ff',
    },
  };
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs:2, md: 5 },
        pt: 6,
        pb: 6,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
          As an affiliated ministry of the South India Baptist Bible College & Seminary, we are dedicated to educating and empowering the children of India, helping them unlock their full potential. Our unwavering commitment to exemplifying God's love drives us to create an exceptional academic environment that nurtures holistic development. Through our devotion to caring for students, we strive to inspire transformative living and create a meaningful impact in the world.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
           
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
  <Link to="/about" style={linkStyle}>
    <ListItemText>
      <Typography lineHeight={2} variant="caption2">
        About Us
      </Typography>
    </ListItemText>
  </Link>

  
    <ListItemText>
      <Typography lineHeight={2} variant="caption2">
      <span style={{ display: "inline-flex", alignItems: "center" }}>
      Email: <img src="/images/email.png" alt="BuildSchoolTogether.gmail.com" style={{ marginLeft: "5px" }} />
    </span>
      </Typography>
    </ListItemText>
  

 
    <ListItemText>
      <Typography lineHeight={2} variant="caption2">
        Phone: <img src="/images/phone.png" alt="(669) 244 - 2366" />
      </Typography>
    </ListItemText>

</List>

        </Grid>
      
        {/* <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid> */}
      </Grid>
    </Box>
  );
}
