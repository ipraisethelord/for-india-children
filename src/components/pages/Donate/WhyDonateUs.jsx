import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { WhyDonate } from "../../../data/writtings";

function WhyDonateComponent() {
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
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          width:cardWidth,
        },
      }}
    >
      <Paper elevation={3} sx={{ padding: 7 }}>
        {WhyDonate.map((item, index) => (
          // <Typography key={index} variant={index === 0 && isSmallScreen ? "h6" : index === 0 ? "h3" : "body1"}
          <Typography key={index} variant={index === 0  ? font : "body1"}
          gutterBottom>
            {item}
          </Typography>
        ))}
      </Paper>
    </Box>
  );
}

export default WhyDonateComponent;
