import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AboutContent from "./AboutSub/AboutContent";
import VisionAndMissionPaper from "./AboutSub/VisionAndMissionPaper";
import Goals from "./AboutSub/Goals.jsx";
import GoalContent from "./AboutSub/GoalContent";
import { Colors } from "../../styles/theme";
import CoreValues from "./AboutSub/CoreValues";
function About() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="flex-start"
      alignContent="center"
      sx={{
        bgcolor: Colors.light_gray,
        width: "100%",
      }}
    >
      <Box
        id="about"
        sx={{
          width: { xs: "100%", md: "70%" },
          padding: "15px",
          order: { xs: 2, md: 1 },
        }}
      >
        <AboutContent />
        <GoalContent />
      </Box>
      <Box
        id="visionBox"
        sx={{
          width: { xs: "100%", md: "28%" },
          order: { xs: 1, md: 2 },
          padding: "15px",
        }}
      >
        <Stack id="vision" spacing={3}>
          <VisionAndMissionPaper
            item="Vision"
            content="Our vision is to establish a self-sufficient Baptist Academy Group of Schools in a timely manner, ensuring a quality education for generations to come without the need for further funding."
          />
          <VisionAndMissionPaper
            item="Mission"
            content="Our mission is to provide exceptional learning environments that equip students with the necessary skills to succeed in life."
          />
          <CoreValues />
          <Goals />
        </Stack>
      </Box>
    </Box>
  );
}

export default About;

