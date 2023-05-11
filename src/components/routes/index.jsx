// import Header from "../reusable/Header";
// import Footer from "../reusable/Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import About from "../pages/About";
import CategoryDetail from "../pages/CategoryDetail";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Projects from "../projects";
import Appbar from "../appbar";
import Footer from "../footer";
import Drawer from "../drawer";
import Donate from "../pages/Donate";
import BannerBox from "../reusable/BannerBox";

function Router() {
    const Layout = () => {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Appbar />
            <BannerBox />
            <Outlet  style={{ flexGrow: 1, alignItems: 'flex-start' }}/> {/****this is the container of each page such as about, faq, project */}
                             
                   <Footer /> 
                    <Drawer />
            </div>
          )

    }
  
 
  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Faq" element={<Faq />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Donate" element={<Donate />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Category" element={<CategoryDetail />} />
            <Route path="Category/:id" element={<CategoryDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
 

  return <BrowserRoutes />;
}
export default Router;