import React from 'react';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@mui/material";
import {
  // Send,
  // Drafts,
  // Inbox,
  // StarBorder
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material"
import {Menu} from "../../../store";


const MenuList = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menu = new Menu()
  console.log(menu.menuList)

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="my-menu"
      subheader={
        <ListSubheader component="div" id="my-menu" >
          My Menu
        </ListSubheader>
      }
    >
      {/*{menu.menuList.map((content, i) => {*/}
      {/*  let firstDepth = [];*/}
      {/*  if (content.menuLevelValue == "1") {*/}
      {/*    firstDepth.push(*/}
      {/*        <ListItemButton onClick={handleClick}>*/}
      {/*          <ListItemText primary="Inbox" />*/}
      {/*          {open ? <ExpandLess /> : <ExpandMore />}*/}
      {/*        </ListItemButton>*/}
      {/*    )*/}
      {/*  }*/}
      {/*})}*/}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default MenuList;