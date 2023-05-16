import {
    Dialog,
    DialogTitle,
    Slide,
    Box,
    IconButton,
    DialogContent,
    DialogActions,   
    Typography,
    Button,
 
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import { Colors } from "../../styles/theme";

  import { ProjectToDonate, Project, ProjectImage } from "../../styles/project";

  import useTheme from "@mui/material/styles/useTheme";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import React from 'react';
  import BasicTableMobile from "../projects/BasicTableMobile";
  //import Link from "@mui/material/Link";
  import styled from "@emotion/styled";
  const SlideTransition = React.forwardRef((props, ref) => (
    <Slide direction='down' {...props} ref={ref} />
  ))
  
  const ProjectDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
  }));
  
  const ProjectDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
  }));
  
  export default function ProjectDetailMobile({ open, onClose, project }) {
      const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down("md"));
      const StyledLink = styled("a")({
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
          textDecoration: "none",
        },
      });
    return (   
      <Dialog
        TransitionComponent={SlideTransition}
        variant="permanant"
        open={open}
        maxWidth="xl"
      >
        <DialogTitle
          sx={{
            background: Colors.secondary,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
          >
            Build Baptist Academy CBSE School
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <ProjectDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
            <Project sx={{ mr: 4 }}>
              <ProjectImage src={project.image} />
            </Project>
            <ProjectDetailInfoWrapper>
             
              <Typography sx={{ lineHeight: 2 }} variant="h4">
                {project.name}
              </Typography>
              <Typography variant="body">
                {project.description}             
              </Typography>
              <Box
                sx={{ mt: 4 }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >                         
                <Button variant="contained" sx={{color:'white', fontWeight:'bold'}}><StyledLink href="/donate" underline="none" color="inherit">Donate</StyledLink></Button>         
              </Box>
             
             
            </ProjectDetailInfoWrapper>
          </ProjectDetailWrapper>
                <Typography variant="h6">Cost Breakdown</Typography>
            <BasicTableMobile tableName={project.name} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Close
          </Button>
         
        </DialogActions>
     
      </Dialog>
    );
  }
  