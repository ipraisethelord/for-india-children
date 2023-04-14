import React, { useState, useEffect } from 'react';
import {Toolbar, IconButton, Drawer, ListItemButton, ListItemText} from '@mui/material';
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
            <Box >
                 <CssBaseline />
            <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
                <div>
                    {/* <FixedTopNavigation /> */}
                   
                    <NavBar />                  
                </div>
            </Paper>
            </Box>
        );
    };

    const Footer = () => {
        return (
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <Toolbar sx={{ backgroundColor:"#525252",  height: "8vh", color:"white"}}>
               Footer
            </Toolbar>
             {/* <FixedBottomNavigation /> */}
            </Paper>
        );
    };

    return (
        <>
            <div>{Header()}</div>
            <div>{props.children}</div>
            <div>{Footer()}</div>
        </>
    );
};

export default Container;
