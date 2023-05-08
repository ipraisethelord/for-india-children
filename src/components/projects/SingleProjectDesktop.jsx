import { useEffect, useState, useRef } from "react";
import {

  Project,
  ProjectActionButton,
  ProjectActionsWrapper,
  ProjectToDonate,
  // ProjectFavButton,
  ProjectImage,
  ProjectMetaWrapper,
} from "../../styles/project";
import { Stack, Tooltip, Typography } from "@mui/material";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProjectDetail from "../projectdetail";
import ProjectMeta from "./ProjectMeta";
import Link from '@mui/material/Link';
import Colors from "../../styles/theme";
import { important } from "polished";
import Tip from "../../styles/project";
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
        <ProjectImage src={project.image} />
        {(showOptions || matches) && (
            
          <ProjectToDonate  show={showOptions} variant="contained">  
          <Link href="/Donate" underline="none" color="inherit">     
            Donate  </Link>         
          </ProjectToDonate >
        )}
       
        <ProjectActionsWrapper show={(showOptions || matches)}>
          <Stack direction={matches ? "row" : "column"}>
            <ProjectActionButton>
              <Tooltip placement="left" title="share this project">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProjectActionButton>
            {/* <Typography variant="body2" sx={{ backgroundColor: `${Colors.primary} !important`,color: `${Colors.white} !important`, }} >View Detail</Typography> */}
            <Tip variant="body2">View Detail</Tip>
            <ProjectActionButton onClick={() => showProjectDetailDialog()}  >
             
            <FitScreenIcon color="primary" />
             
            </ProjectActionButton>
          </Stack>
        </ProjectActionsWrapper>
      </Project>
      <ProjectMeta project={project} />
      <ProjectDetailDialog project={project} />
    </>
  );
}
