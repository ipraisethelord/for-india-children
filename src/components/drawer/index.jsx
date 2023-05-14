import {  Divider, Drawer, List, ListItem, ListItemButton,ListItemText, styled,} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { NavItems } from "../../data/writtings";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { menu, hasChildren } from "./menu";
import React from "react";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  color: selected ? theme.palette.selected.main: "white",
}));


export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
  };
  
  const SingleLevel = ({ item }) => {
    return (
      <StyledListItemButton
              selected={selectedItem === item}
              onClick={() => handleItemClick(item)}
              component={NavLink}
              to={item.to}
            >
              <ListItemText primary={item.title} />
            </StyledListItemButton>
    );
  };
  const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    return (
      <>
        <StyledListItemButton onClick={handleClick}>
         
          <ListItemText primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <MenuItem key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </>
    );
  };
    return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>         
        <List>
        {menu.map((item, key) => (
      
        <MenuItem
              selected={selectedItem === item}
              onClick={() => handleItemClick(item)}
              key={key} item={item}
           />              
       
      ))}     
          
          <MiddleDivider />
          </List>
      </Drawer>
    </>
  );
}
