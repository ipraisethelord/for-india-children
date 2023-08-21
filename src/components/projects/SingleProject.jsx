import { useState } from "react";
import {  
  Project, 
  ProjectToDonate,
  //ProjectFavButton,
  ProjectImage,
 
} from "../../styles/project";
import CapitalizeFirstLetter from "../reusable/CapitolizeFirstLetter";
import Typography  from "@mui/material/Typography";

import useDialogModal from "../../hooks/useDialogModal";
import ProjectDetailMobile from "../projectdetail/ProjectDetailMobile";
import styled from "@emotion/styled";
//import Link from "@mui/material/Link";
import { Colors } from "../../styles/theme";

export default function SingleProject({ project, matches }) {
  const [ProjectDetailDialog, showProjectDetailDialog, closeProjectDialog] =
    useDialogModal(ProjectDetailMobile);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  const StyledLink = styled("a")({
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "none",
    },
  });
  return (
    <>
      <Project onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     
        <ProjectImage src={project.image} onClick={() => showProjectDetailDialog()} />
        <Typography variant={matches ? "body" : "subtitle1"} lineHeight={2} onClick={() => showProjectDetailDialog()}  sx={{
    cursor: "pointer",
    "&:hover": {
      color: Colors.primary, 
      textDecoration: 'underline',
    },
  }}>
          {CapitalizeFirstLetter(project.name)}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"} onClick={() => showProjectDetailDialog()}  sx={{
    cursor: "pointer",
    "&:hover": {
     color: Colors.primary, 
      textDecoration: 'underline',
    },
  }}>
         ${project.total}
        </Typography> 

      </Project>
      <ProjectToDonate variant="contained" >   
        <StyledLink href="/donate" underline="none" color="inherit">Donate</StyledLink>       
      </ProjectToDonate>
      <ProjectDetailDialog project={project} />
    </>
  );
}
