import React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MapsHomeWorkSharpIcon from '@mui/icons-material/MapsHomeWorkSharp';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const Navbar = (props)=> {
  //set active button
  const [activeButton, setActiveButton] = useState('');
  
  //handle resource button
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  const handleResourceClick = (e)=>{
    setAnchorEl(e.currentTarget);
  }
  const handleClose = ()=>{
    setAnchorEl(null);
  }
  //drawer

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Build School for India Children
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

  const container = window !== undefined ? () => window().document.body : undefined;


//end drawer
return (
 <Box sx={{ display: 'flex' }}>
   <CssBaseline />
  <AppBar component="nav">
    <Toolbar>
    <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
     <Stack direction= "row">
      <IconButton edge='start' color = 'inherit' aria-label='logo'  sx={{ flexGrow: 1, display: { xs: 'none', sm:'flex'} }}  >
          <MapsHomeWorkSharpIcon style={{fontSize:48}} />
      </IconButton>
      <Stack sx={{ flexGrow: 1, display: { xs: 'none', sm:'none', md: 'flex'} }}>
        <Typography variant='h6'  sx={{letterSpacing:'1px'}}>
        BUILD SCHOOL
          </Typography>
        <Typography variant='h6'>
        For India Children
          </Typography>
      
      </Stack>
      </Stack>
      
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Stack direction='row' spacing={{ xs: 1, sm: 2, md: 4 }}  justifyContent="center"
  alignItems="center" sx={{ flexGrow: 1, display: { xs: 'none', sm:'flex', md: 'flex'} }}>
            <Button color='inherit' component={NavLink}  to="/" onClick={() => setActiveButton('Home')}
  sx={{ color: activeButton === 'Home' ? 'red' : 'inherit' }}>Home</Button>
            <Button color='inherit' component={NavLink}  to="/Faq" onClick={() => setActiveButton('Faq')}
            sx={{ color: activeButton === 'Faq' ? 'red' : 'inherit' }}>Faq</Button>
            <Button color='inherit' component={NavLink} to="/about"> About</Button>
            <Button color='inherit' component={NavLink} to="/Contact"> Contact</Button>
            <Button color='inherit' component={NavLink}  id='resources-button' onClick={handleResourceClick} aria-controls={open?'resources-meun':undefined}
            aria-haspopup='true' 
            aria-expanded ={open?'true':undefined} endIcon={<KeyboardArrowDownIcon />}> Resources</Button>
            <Button color='inherit'> Login</Button>
        </Stack>

        <Menu id='resources-menu' 
                anchorEl={anchorEl} 
                open={open} 
                MenuListProps={{'aria-labelledby': 'resources-button',}} 
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'right'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
        >
        <MenuItem  onClose={handleClose}>Blog</MenuItem>
        <MenuItem  onClose={handleClose}>Podcast</MenuItem>
    </Menu>
      </Toolbar>
  </AppBar>
 <Box component="nav">
  <Drawer
    container={container}
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    sx={{
      display: { xs: 'block', sm: 'none' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
  >
    {drawer}
  </Drawer>
</Box>
</Box>
) 
}
export default Navbar;

