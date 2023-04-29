import {
    Box,
    Divider,
    List,
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
  import PersonIcon from "@mui/icons-material/Person";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import SearchIcon from "@mui/icons-material/Search";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
  import Actions from "./actions";
  import { useUIContext } from "../../context/ui";
  import Title, {ThemeVerse} from "../../data/title";
  
  //import Logo from "/public/logo.png";
  export default function AppbarDesktop({ matches }) {
    
    // const { setShowSearchBox } = useUIContext();
  
    return (
      <AppbarContainer>          
        {/* <img src= "/logo.png" alt='build school for children' style={{ display: "block", marginRight: "auto", marginLeft: 0 }} />     */}
   
    {/* <AppbarHeaderFixTop>    
      <ThemeVerse />
    </AppbarHeaderFixTop> */}
  
    
        <AppbarHeader variant="h4"><Title /></AppbarHeader>
       
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Projects" />
          <ListItemText primary="About us" />
          <ListItemText primary="Contact us" />
          {/* <ListItemButton onClick={() => setShowSearchBox(true)}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton> */}
            </MyList>
         <Actions matches={matches} />   
   
      </AppbarContainer>
    );
  }
  