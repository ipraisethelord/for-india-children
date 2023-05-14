import {
  ListItemButton,
  ListItemText,
  Button, // Add Button import
} from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Actions from "./actions";
import Title, { NavItems } from "../../data/writtings";
import { NavLink } from "react-router-dom";

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
    ...(selected && { "& .MuiListItemText-primary": { fontWeight: theme.typography.fontWeightBold } })
  }));

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">
        <Title />
      </AppbarHeader>
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
            {/* Check if item is "Donate" and render as Button */}
            {item === "Donate" ? (
              <Button variant="contained" sx={{ color: 'white', fontWeight: 'bold' }}>
                <ListItemText primary={item} />
              </Button>
            ) : (
              <ListItemText primary={item} />
            )}
            {item === "About" && selectedItem === "About" && (
              <>
                <ListItemButton
                  key={`${item}-History`}
                  sx={{
                    textAlign: "center",
                    paddingLeft: 4,
                    paddingTop: 1,
                    paddingBottom: 1,
                  }}
                  component={NavLink}
                  to="/About/History"
                >
                  <ListItemText primary="History" />
                </ListItemButton>
                <ListItemButton
                  key={`${item}-MiracleWell`}
                  sx={{
                    textAlign: "center",
                    paddingLeft: 4,
                    paddingTop: 1,
                    paddingBottom: 1,
                  }}
                  component={NavLink}
                  to="/About/MiracleWell"
                >
                  <ListItemText primary="A Miracle Well" />
                </ListItemButton>
              </>
            )}
          </StyledListItemButton>
        ))}
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
