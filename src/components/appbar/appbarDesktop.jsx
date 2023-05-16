import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button  from "@mui/material/Button";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { useState } from "react";
import Actions from "./actions";
import Title from "../../data/writtings";
import {NavLink, Link} from "react-router-dom";
import { NaviMenu, hasChildren } from "../drawer/navmenu";
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import theme from "../../styles/theme";
import React from "react";
export default function AppbarDesktop({ matches }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  }; 

  const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
  };

  const SingleLevel = ({ item }) => {
    return (<>
     {item.title !== "Donate" && (
      <ListItemButton
        selected={selectedItem === item.title}
        onClick={() => handleItemClick(item.title)}
        sx={{ textAlign: "center" }}
        component={NavLink}
        to={item.to}
      >
    
      <ListItemText primary={item.title} />
 
      </ListItemButton>
     )}
      </>
    );
  };

  const MultiLevel = ({ item }) => {
    const { items: children } = item;
  
    return (
     
         <PopupState variant="popover" popupId="multi-menu">
            {(popupState) => (
              <>
              <ListItemButton  {...bindTrigger(popupState)} sx={{textAlign:"center", }}>
              <ListItemText primary={item.title} />
              </ListItemButton>
              <Menu  {...bindMenu(popupState)}>
              {children.map((child, key) => (
                    <MenuItem key={key} item={child} />
                  ))}                
              </Menu>
            </>        
            )}
          </PopupState>
     
    );
  };

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">
        <Title />
      </AppbarHeader>
      <MyList type="row" >
        {NaviMenu.map((item, key) => (
          <MenuItem key={key} item={item} />
        ))}
      </MyList> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Button component={Link} to="/donate" variant="outlined" sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}>
  DONATE
</Button>

      <Actions matches={matches} />
    </AppbarContainer>
  );
}
