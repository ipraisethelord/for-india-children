import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";

import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";

import { UIProvider } from "./context/ui";
import Router from "./components/routes";

function App() { 

  return (   
    // <Router />
    <ThemeProvider theme={theme}>
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        background: "#fff",
      }}
    >
      <Stack>
        <UIProvider>
          <Router />
         
        </UIProvider>
      </Stack>
    </Container>
  </ThemeProvider>
);
}
export default App
