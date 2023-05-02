import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    styled,
  } from "@mui/material";
  import { useUIContext } from "../../context/ui";
  import CloseIcon from "@mui/icons-material/Close";
  import { DrawerCloseButton } from "../../styles/appbar";
  import { lighten } from "polished";
  import { Colors } from "../../styles/theme";
  import { NavItems } from "../../data/title";
  import { NavLink } from "react-router-dom";
  import { useState } from "react";
  const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;
  
  
  export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
      color: selected ? theme.palette.selected.main: "white",
    }));

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
          {NavItems.map((item) => (
          <ListItem key={item} disablePadding>
          <StyledListItemButton
                selected={selectedItem === item}
                onClick={() => handleItemClick(item)}
                component={NavLink}
                to={"/" + (item == "Home" ? "" : item)}
              >
                <ListItemText primary={item} />
              </StyledListItemButton>
          </ListItem>
        ))}     
            
            <MiddleDivider />
            </List>
        </Drawer>
      </>
    );
  }
  