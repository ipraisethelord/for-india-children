import React, { useState, useEffect } from 'react';
import {AppBar, Toolbar, IconButton, Drawer, ListItemButton, ListItemText} from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FixedBottomNavigation from './FixedBottomNavigation';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './NavBar';
import FixedTopNavigation from './FixedTopNavigation';
const Container = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const SideBar = () => {
        const navigateToPage = (destination) => {
            window.location.assign(destination);
        };

        return (
            <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
                <ListItemButton onClick={() => navigateToPage("/")}>
                    <ListItemText primary={"Home"} />
                </ListItemButton>
                <ListItemButton onClick={() => navigateToPage("/about")}>
                    <ListItemText primary={"about"} />
                </ListItemButton>
            </Drawer>
        );
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const Header = () => {
        return (
        
            <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
               
                     {/* <FixedTopNavigation /> */}
                   
                    <NavBar />                  
               
            </Paper>
       
        );
    };

    const Footer = () => {
        return (
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <Toolbar sx={{ backgroundColor:"primary",  height: "8vh", color:"white"}}>
               Footer
            </Toolbar>
             {/* <FixedBottomNavigation /> */}
            </Paper>
        );
    };

    return (
       
            
        <Paper sx={{ display: 'flex', padding:0, margin:0 }} >
            {/* {Header()} */}
           <div>{Header()}</div>
            <div>{props.children}</div>
            <div> {Footer()}</div>
           
        </Paper>
       
    );
};

export default Container;
