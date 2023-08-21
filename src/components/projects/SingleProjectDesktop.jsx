import {useState} from "react";
import CapitalizeFirstLetter from "../reusable/CapitolizeFirstLetter";
import {
  Project,
  ProjectToDonate,
  ProjectImage,

} from "../../styles/project";
import Typography  from "@mui/material/Typography";
import useDialogModal from "../../hooks/useDialogModal";
import ProjectDetail from "../projectdetail";
import styled from "@emotion/styled";

//import Link from "@mui/material/Link";

export default function SingleProjectDesktop({ project, matches }) {
  
  const [ProjectDetailDialog, showProjectDetailDialog, closeProjectDialog] =
    useDialogModal(ProjectDetail);
   
  const [showOptions, setShowOptions] = useState(false);
  

  const handleMouseEnter = (e) => {
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
  
      <Project onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <ProjectImage src={project.image}alt="img" onClick={() => showProjectDetailDialog()} />
        {(showOptions || matches) && (
        
          <ProjectToDonate  show={showOptions} variant="contained"  >  
          <StyledLink href="/donate" underline="none" color="inherit">Donate </StyledLink>                  
          </ProjectToDonate >  
        )}
       
      
      </Project>
     
       <Typography variant={matches ? "body" : "subtitle1"} lineHeight={2} onClick={() => showProjectDetailDialog()}  sx={{
        cursor: "pointer",
        "&:hover": {
          color: '#00a2ff',//Colors.primary, 
          textDecoration: 'underline',
        },
        }}>
          {CapitalizeFirstLetter(project.name)}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"} onClick={() => showProjectDetailDialog()}  sx={{
        cursor: "pointer",
        "&:hover": {
          color: '#00a2ff',//Colors.primary, 
          textDecoration: 'underline',
        },
      }}>
         ${project.total}
        </Typography> 

      <ProjectDetailDialog project={project} />
    </>
  );
}
