import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import {   
    AppbarContainer,
    AppbarHeader,
    
    MyList,
  } from "../../styles/appbar";
  import { styled } from "@mui/material/styles";
  import {useState} from "react";
  import PersonIcon from "@mui/icons-material/Person";
  //import FavoriteIcon from "@mui/icons-material/Favorite";
  import SearchIcon from "@mui/icons-material/Search";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
  import Actions from "./actions";
  import { useUIContext } from "../../context/ui";
  import Title, {ThemeVerse, NavItems} from "../../data/writtings";
  import { NavLink } from "react-router-dom";
  import { lighten } from "polished";
  //import Logo from "/public/logo.png";
  export default function AppbarDesktop({ matches }) {
    
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
   
    const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
      color: selected ? theme.palette.primary.main : theme.palette.text.primary,
      "&.Mui-selected": {
        backgroundColor: "transparent",
      },
      "&:hover": {
        backgroundColor: "transparent !important",
      },
      ...(selected && { "& .MuiListItemText-primary": { fontWeight: theme.typography.fontWeightBold }})
    }));
    return (
      <AppbarContainer>          
      
    
        <AppbarHeader variant="h4"><Title /></AppbarHeader>       
        <MyList type="row">
      
        {NavItems.map((item) => (
        <StyledListItemButton
          key={item}
          selected={selectedItem === item}
          onClick={() => handleItemClick(item)}
          sx={{ textAlign: "center" }}
          component={NavLink}
          to={"/" + (item === "Home" ? "" : item)}
        >
          <ListItemText primary={item} />
        </StyledListItemButton>
      ))} 
         
         
            </MyList>
         <Actions matches={matches} />      
      </AppbarContainer>
    );
  }
  