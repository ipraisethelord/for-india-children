import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Projects from "./components/projects";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import { useEffect } from "react";
import Title from "./data/title";
// import Router from './components/routes/Router';

function App() { 
  // useEffect(() => {
  //   document.title = {Title};
  // }, []);


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
          <Appbar />
          <Banner />
          <Promotions />
          <SearchBox />
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography variant="h4">Projects</Typography>
          </Box>
          <Projects />
          <Footer />
          <AppDrawer />
        </UIProvider>
      </Stack>
    </Container>
  </ThemeProvider>
);
}

export default App
//<button onClick={() => setCount((count) => count + 1)}>ount is {count}</button>
 {/* <Router>
          <Routes>
            <Route path='/' element={<Container><Box sx={{ display: 'flex' }} ><Home/></Box></Container>} />
            <Route path='/About' element={<Container><About /></Container>} />
            <Route path='/Faq' element={<Container><Faq /></Container>} />
            <Route path='/Contact' element={<Container><Contact /></Container>} />
          </Routes>
        </Router>
       */}