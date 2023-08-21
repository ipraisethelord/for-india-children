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
{/* <Box sx={{ display: 'flex', justifyContent: 'center',alignItems:'center',  border: '1px solid red' }}>
<Grid container spacing={1} rowSpacing={2} sx={{ margin: '0 auto',justifyContent: 'center',alignItems:'center',  border: '1px solid red' }}>
<Grid item  sm={12} md={6} lg={4}  sx={{ justifyContent: 'right',alignItems:'center',  border: '1px solid red' }}>
  <MyImageCard name="01" source="/images/underConstruction/01.jpg"/>
</Grid>
<Grid item spacing={1}  sm={12} md={6} lg={4}  sx={{ margin: '0 auto',justifyContent: 'center',alignItems:'center',  border: '1px solid red' }}>
  <MyImageCard name="02" source="/images/underConstruction/02.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}  sx={{ margin: '0 auto',justifyContent: 'center',alignItems:'center',  border: '1px solid red' }}>
  <MyImageCard name="03" source="/images/underConstruction/03.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}  sx={{ margin: '0 auto',justifyContent: 'center',alignItems:'center',  border: '1px solid red' }}>
  <MyImageCard name="04" source="/images/underConstruction/04.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}  sx={{ margin: '0 auto',justifyContent: 'center',alignItems:'center',  border: '1px solid red' }}>
  <MyImageCard name="05" source="/images/underConstruction/05.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}>
  <MyImageCard name="06" source="/images/underConstruction/06.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}>
  <MyImageCard name="07" source="/images/underConstruction/07.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}>
  <MyImageCard name="08" source="/images/underConstruction/08.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}>
  <MyImageCard name="09" source="/images/underConstruction/09.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}>
  <MyImageCard name="10" source="/images/underConstruction/10.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}>
  <MyImageCard name="11" source="/images/underConstruction/11.jpg" />
</Grid>
<Grid item  sm={12} md={6} lg={4}>
  <MyImageCard name="12" source="/images/underConstruction/12.jpg" />
</Grid>
</Grid>
</Box> */}