import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { NaviMenu, hasChildren } from "./navmenu";
import React from "react";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  color: selected ? theme.palette.selected.main : "white",
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
      <StyledListItem
        selected={selectedItem === item}
        onClick={() => handleItemClick(item)}
        component={NavLink} // Use NavLink component instead of ListItemButton
        to={item.to}
      >
        <ListItemText primary={item.title} />
      </StyledListItem>
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
        <StyledListItem onClick={handleClick}>
          <ListItemText primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledListItem>
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
          {NaviMenu.map((item, key) => (
            <MenuItem
              selected={selectedItem === item}
              onClick={() => handleItemClick(item)}
              key={key}
              item={item}
            />
          ))}
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
}
