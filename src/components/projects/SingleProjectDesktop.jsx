import { useEffect, useState } from "react";
import {

  Project,
  ProjectActionButton,
  ProjectActionsWrapper,
  ProjectAddToCart,
  ProjectFavButton,
  ProjectImage,
  ProjectMetaWrapper,
} from "../../styles/project";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProjectDetail from "../projectdetail";
import ProjectMeta from "./ProjectMeta";

export default function SingleProjectDesktop({ project, matches }) {
  
  const [ProjectDetailDialog, showProjectDetailDialog, closeProjectDialog] =
    useDialogModal(ProjectDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
    
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Project onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProjectImage src={project.image} />
        <ProjectFavButton isfav={0}>
          <FavoriteIcon />
        </ProjectFavButton>
         {/* !! make showOptions to be bollean  */}
        {!!(showOptions || matches) && (
          <ProjectAddToCart show={showOptions} variant="contained"> 
            DONATE
          </ProjectAddToCart>
        )}
       
        <ProjectActionsWrapper show={(showOptions || matches)}>
          <Stack direction={matches ? "row" : "column"}>
            <ProjectActionButton>
              <Tooltip placement="left" title="share this project">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProjectActionButton>
            <ProjectActionButton onClick={() => showProjectDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProjectActionButton>
          </Stack>
        </ProjectActionsWrapper>
      </Project>
      <ProjectMeta project={project} />
      <ProjectDetailDialog project={project} />
    </>
  );
}
