import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import About from "../pages/About";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Projects from "../projects";
import Project from "../pages/Project";
import Appbar from "../appbar";
import Footer from "../footer";
import Drawer from "../drawer";
import Donate from "../pages/Donate/index";
import BannerBox from "../reusable/BannerBox";
import History from "../pages/AboutSub/History"
import Well from "../pages/AboutSub/Well";
import DonatePaypal from "../pages/Donate/donate-paypal";
function Router() {
  const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Appbar />
        {!isHomePage && <BannerBox />}
     
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, paddingBottom: 60 }}>
        <Outlet />
      </div>
        <Footer />
        <Drawer />
      </div>
    );
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route sensitive={false} path="/" element={<Layout />}>
            <Route sensitive={false} path="/" element={<Home />} />
            <Route sensitive={false}  path="about" element={<About />} />
            <Route sensitive={false}  path="about/history" element={<History />} />
            <Route sensitive={false}  path="about/well" element={<Well />} />
            <Route sensitive={false}  path="faq" element={<Faq />} />
            <Route sensitive={false}  path="projects" element={<Projects />} />
            <Route sensitive={false}  path="project" element={<Project />} />
            <Route sensitive={false}  path="donate" element={<Donate />} />
            <Route sensitive={false} path="donate-paypal" element={<DonatePaypal />} />
            <Route sensitive={false} path="contact" element={<Contact />} />
         
          
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}

export default Router;
