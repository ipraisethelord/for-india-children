import { Box, Button, Container, Grid } from "@mui/material";
import { projects } from "../../data";
import SingleProject from "./SingleProject";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProjectDesktop from "./SingleProjectDesktop";

export default function Projects() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProjects = projects.map((project) => (
    <Grid item key={project.id} xs={2} sm={3} md={3} display="flex" flexDirection={'column'} alignItems="center">
      {matches ? (
        <SingleProject project={project} matches={matches} />
      ) : (
        <SingleProjectDesktop project={project} matches={matches} />
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
