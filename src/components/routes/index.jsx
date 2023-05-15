import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import About from "../pages/About";
import CategoryDetail from "../pages/CategoryDetail";
import { BrowserRouter, Routes, Route, Outlet, useLocation, useHistory, useResolvedPath } from "react-router-dom";
import Projects from "../projects";
import Project from "../pages/Project";
import Appbar from "../appbar";
import Footer from "../footer";
import Drawer from "../drawer";
import Donate from "../pages/Donate/index";
import BannerBox from "../reusable/BannerBox";
import History  from "../pages/AboutSub/History";
import Well from "../pages/AboutSub/Well";

function Router() {
  const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Appbar />
        {!isHomePage && <BannerBox />}
        <Outlet style={{ flexGrow: 1, alignItems: 'flex-start' }} />
        <Footer />
        <Drawer />
      </div>
    );
  };

  const CaseInsensitiveRoute = ({ path, element }) => {
    const resolvedPath = useResolvedPath(path);
    const location = useLocation();
    const history = useHistory();

    const normalizedPath = resolvedPath.pathname.toLowerCase();

    if (location.pathname.toLowerCase() !== normalizedPath) {
      history.replace(normalizedPath);
    }

    return <Route path={path} element={element} />;
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <CaseInsensitiveRoute path="/about" element={<About />} />
            <CaseInsensitiveRoute path="/about/history" element={<History />} />
            <CaseInsensitiveRoute path="/about/well" element={<Well />} />
            <CaseInsensitiveRoute path="/faq" element={<Faq />} />
            <CaseInsensitiveRoute path="/projects" element={<Projects />} />
            <CaseInsensitiveRoute path="/project" element={<Project />} />
            <CaseInsensitiveRoute path="/donate" element={<Donate />} />
            <CaseInsensitiveRoute path="/contact" element={<Contact />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}

export default Router;
