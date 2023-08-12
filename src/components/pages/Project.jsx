import Projects from "../projects";
import { Grid, Box, Stack, Typography , Divider} from "@mui/material";


import AlbumConstruction from "./ProjectSub/AlbumConstruction";

function Project() {
  return (
    <Stack display="flex">
        <Box  padding={5}>
    <Typography variant="h4" align="center" padding={5}>CBSE School Funding Needed:<Typography component="span" variant="h4" sx={{ fontWeight: 'bold', color: 'red' }}>
    $433,760
  </Typography></Typography>
      <Projects />
      </Box>
      <Divider padding={5}/>
      <Box height="100%"  padding={10} bgcolor="white">
<Typography variant="h4" align="center">Construction in Progress</Typography>
        <AlbumConstruction />
      
      </Box>
    
     &nbsp;
    </Stack>
  );
}

export default Project;
