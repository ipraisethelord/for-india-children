
import { Typography } from "@mui/material";
import { ProjectMetaWrapper } from "../../styles/project";
export default function ProjectMeta({ project, matches }) {
    return (
      <ProjectMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {project.name}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"}>
          ${project.price}
        </Typography>
      </ProjectMetaWrapper>
    );
}