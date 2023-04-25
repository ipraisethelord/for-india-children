import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
//import ChildrenImageList from "../reusable/ChildrenImageList";
import AlbumChildren from "../reusable/AlbumChildren";
import { Typography } from "@mui/material";
function About() {
  return (
    <>
      <Box sx={{ '&.MuiContainer-maxWidthLg': { width: '100%' } }} display="flex" minHeight="100vh" justifyContent="center"
  alignItems="center">
        <Stack spacing={2} alignItems="center">
          <Container maxWidth={false}>
            <Typography variant="h3" component="h2">
              It's all about
            </Typography>
            {/* <ChildrenImageList /> */}
          </Container>
          <Container maxWidth={false}>
            <AlbumChildren />
          </Container>
        </Stack>
      </Box>
    </>
  );
}

export default About;