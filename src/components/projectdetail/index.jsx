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
  Stack,
} from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProjectToDonate, Project, ProjectImage } from "../../styles/project";
import { BannerShopButton } from "../../styles/banner";
//import IncDec from "../ui/incdec";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import React from 'react';
import BasicTable from "../reusable/BasicTable";
import Link from '@mui/material/Link';

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

export default function ProjectDetail({ open, onClose, project }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
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
              {/* {project.description}
              {project.description} */}
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
             
              <Link href="/Donate" underline="none">
              <Button variant="contained" >Donate</Button>
              </Link>
            </Box>
           
            <Box
              sx={{
                mt: 4,
                color: Colors.dove_gray,
              }}
            >
              <FacebookIcon />
              <TwitterIcon sx={{ pl: 2 }} />
              <InstagramIcon sx={{ pl: 2 }} />
            </Box>
          </ProjectDetailInfoWrapper>
        </ProjectDetailWrapper>
              <Typography>Cost Breakdown</Typography>
          <BasicTable tableName={project.name} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Close
        </Button>
       
      </DialogActions>
   
    </Dialog>
  );
}
