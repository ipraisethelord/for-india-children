import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import About from '../pages/About';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

//import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function Router() {
   
    const Layout = () => {
        return (
            <>
            <CssBaseline />
            <Header />
           <Toolbar />
                <Stack direction={{ xs: 'column', sm: 'row' }}  >
                    <Outlet />
                </Stack>
            <Footer />
            </>
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
                    <Route path="Contact" element={<Contact />} />
                </Route>
                </Routes>
            </BrowserRouter>
        )
    }

    // this code shows how to program out the router using createBrowserRouter
    // const BrowserRoutes = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Layout />,
    //         children: [
    //             {
    //                 path: "/",
    //                 element: <Home />
    //             },
    //             {
    //                 path: "/contact-us",
    //                 element: <Contact />
    //             }
    //         ]
    //     }
    // ])

    // add this RouterProvider in the return statement if you plan on using the createBrowserRouter
    // <RouterProvider router={BrowserRoutes} />

    return (
        <BrowserRoutes />
    )
}
export default Router;
