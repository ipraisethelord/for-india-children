import { useEffect, useState } from "react";
import {
  
  Project,
  ProjectActionButton,
  ProjectActionsWrapper,
  ProjectToDonate,
  //ProjectFavButton,
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
import Link from '@mui/material/Link';

export default function SingleProject({ project, matches }) {
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
        <ProjectMeta project={project} matches={matches} />
        <ProjectActionsWrapper>
          <Stack direction={matches ? "row" : "column"}>
          
            <ProjectActionButton>
              <Tooltip placement="left" title="share this project">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProjectActionButton>
            <ProjectActionButton onClick={() => showProjectDetailDialog()}>
              <Tooltip placement="left" title="View Detail">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProjectActionButton>
          </Stack>
        </ProjectActionsWrapper>
      </Project>
      <ProjectToDonate variant="contained"> <Link href="/Donate" underline="none" color="inherit">      
            Donate    
          </Link>    </ProjectToDonate>
      <ProjectDetailDialog project={project} />
    </>
  );
}
