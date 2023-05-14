import { AMiracleWellContent } from "../../../data/writtings";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography  from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
function Well() {
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    let boxPadding = 2; 
    let font="h5";
    if (isMediumScreen) {
     
      boxPadding = 3;
      font="h3"   
    }
  
    if (isLargeScreen) {
     
      boxPadding =4;
      font="h2"   
    }
  return (
    <Stack display="flex">
     
     <Paper elevation={3} sx={{ padding: 7 }}>
        {AMiracleWellContent.map((item, index) => (
          // <Typography key={index} variant={index === 0 && isSmallScreen ? "h6" : index === 0 ? "h3" : "body1"}
          <Typography key={index} variant={index === 0  ? font : "body1"}
          gutterBottom>
            {item}
          </Typography>
        ))}
      </Paper>
    </Stack>
  );
}

export default Well;
