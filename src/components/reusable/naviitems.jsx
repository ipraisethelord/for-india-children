import { NavItems } from "../../data/title";
import { ListItem, ListItemButton, ListItemText, List } from "@mui/material";
const NaviItems = ()=>{

    return (
        <List>
        {NavItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to={'/'+ (item=='Home'?'':item)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}    
        </List>
    )

}
export default NavItems;
