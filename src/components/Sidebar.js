import * as React from "react";
import { useState, useContext } from "react";
import { CategoryContext } from "../App";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import categories from "../data/category";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({left: false,});
  const { setCategory } = useContext(CategoryContext);
  
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 200, paddingLeft: 3, paddingRight: 2 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton style={{height: 40}} onClick={() => setCategory(text)}>
              <ListItemText primary={text.charAt(0).toUpperCase() + text.slice(1)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon sx={{ color: "black" }} />
        </Button>
        <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}
