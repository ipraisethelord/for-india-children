import styled from "@emotion/styled";
import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { slideInBottom, slideInRight } from "../../animation";
import { Colors } from "../theme";
import PropTypes from 'prop-types';
export const Project = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  
}));

export const ProjectImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  background: Colors.light_gray,
  cursor: "pointer",
  padding: '0px',
  [theme.breakpoints.down("md")]: {
    width: "80%", 
    padding: '1px',

  },
}));

export const ProjectActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));


export const ProjectToDonate = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  fontWeight:"bold",
  color: Colors.white,
  [theme.breakpoints.up("md")]: {
    position: "absolute",    
    bottom: "2%",
    width: "100px",
    padding: "10px 5px",
    animation:
    `${show &&
      slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
 // background: Colors.secondary,
  opacity: 0.9,
  "&:focus": {
    backgroundColor: Colors.primary, 
   // color: Colors.white,
   
  },
  "&:hover": {
    background: Colors.primary, 
    // color: Colors.white,
    // "& .MuiLink-root": {
    //   color: Colors.white,
    // },
   
  },
}));



export const ProjectMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
//use transient props $ to fix boolean passed to DOM element
export const ProjectActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show", // Exclude the "show" prop from being passed to the DOM
})(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}));

ProjectActionsWrapper.propTypes = {
  show: (props, propName, componentName) => {
    if (props[propName] !== undefined && typeof props[propName] !== "boolean") {
      return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Must be a boolean.`);
    }
    return null;
  },
};


const BlueWhiteTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: Colors.primary,
  color: Colors.white,
  fontSize:9,
}));
export default function Tip() {
  return (
    <BlueWhiteTypography variant="body2">View Detail</BlueWhiteTypography>
  );
}




