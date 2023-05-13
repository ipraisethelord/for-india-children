import { Box, Button, Container, Grid } from "@mui/material";
import data from '../../assets/data/data.json';
import SingleProject from "./SingleProject";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProjectDesktop from "./SingleProjectDesktop";


export default function Projects() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProjects = data.map((project) => (
    <Grid item key={project.name} xs={6} sm={3} md={3} display="flex" flexDirection={'column'} alignItems="center">
      {matches ? (
        <SingleProject project={project} matches={matches} key={project.id} />
      ) : (
        <SingleProjectDesktop project={project} matches={matches} key={project.id}/>
      )}
    </Grid>
  ));
  return (
    <Container>
      <Grid        
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProjects}
      </Grid>
    
    </Container>
  );
}
