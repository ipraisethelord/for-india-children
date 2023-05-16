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
import Link from '@mui/material/Link';


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
  return (
    <>
      <Project onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <ProjectImage src={project.image}  onClick={() => showProjectDetailDialog()} />
        {(showOptions || matches) && (
            
          <ProjectToDonate  show={showOptions} variant="contained">  
          <Link to="/donate" underline="none" color="inherit">     
            Donate  </Link>         
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
