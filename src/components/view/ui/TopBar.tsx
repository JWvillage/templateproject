import React, {useEffect} from 'react';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import {MainBar} from "../../../share";
import {Menu} from "../../../store";
import MenuList from "../mymenu/MenuList";

const TopBar = () => {

  const navigate = useNavigate()

  const [value, setValue] = React.useState(0)

  const navLink = [
    {label: '입양', href: '/adopt'},
    {label: '펫시터', href: '/sitter'},
    {label: '쇼핑몰', href: '/shop'},
  ]

  const tabOver = (event: any) => {

    let underStyle = document.getElementsByClassName('tab_indicator')[0]

    const _navi = event.target.href.toString().split('/')
    const navi = _navi.at(_navi.length - 1)

    console.log(navi)
    switch (navi) {
      case 'adopt':
        underStyle.setAttribute('style', 'left: 0px; width: 80px');
        setValue(1);
        break;
      case 'sitter':
        underStyle.setAttribute('style', 'left: 80px; width: 80px');
        setValue(2);
        break;
      case 'shop':
        underStyle.setAttribute('style', 'left: 160px; width: 80px');
        setValue(3);
        break;
    }
  }

  const tabOut = () => {

    let underStyle = document.getElementsByClassName('tab_indicator')[0]

    underStyle.setAttribute('style', ' width: 0px');
  }

  return (
      <div className='topView' >
        <Container className='top'>
          <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              style={{height: '50px'}}
          >
            <Grid item xs={2}>
              <Grid style={{position: 'absolute', top: '10px'}}>
                <img className='mainLogo' src="static/img/main_logo.png" alt="" width="50px" onClick={(e) => {
                  e.preventDefault();
                  navigate('/')
                }}/>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
              >
                <div style={{position: 'relative'}}>
                  <div style={{display: 'flex'}}>
                    {navLink.map((content, i) => {
                      return (
                          <div key={i} className='tab' onMouseOver={tabOver} onMouseOut={tabOut}>
                            <a href={content.href} className='linkTab' onClick={(e) => {
                              e.preventDefault();
                              navigate(`${content.href}`);
                            }}>{content.label}</a>
                          </div>
                      )
                    })}
                    <MainBar />
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => {
                          // navigate('/myMenu')
                          // return (
                          //   <Paper
                          //     className='tab_panel'
                          //     role="tabpanel"
                          //   >
                          //     <MenuList />
                          //   </Paper>
                          // )
                          if (value != 5) {
                            setValue(5)
                          } else {
                            setValue(0)
                          }
                        }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <span className='tab_indicator'></span>
                  <div>
                    <TabPanel value={value} index={1}>adopt</TabPanel>
                    <TabPanel value={value} index={2}>sitter</TabPanel>
                    <TabPanel value={value} index={3}>shop</TabPanel>
                  </div>
                  <div style={{display: "flex", justifyContent: "flex-end", marginRight: '20px'}}>
                    <MenuPanel value={value} index={5}>Menu</MenuPanel>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
  );

  function TabPanel(props: {children: any, value: number, index: number}) {
    const {children, value, index, ...other} = props;

    return (
        <Paper
          className='tab_panel'
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          elevation={2}
          {...other}
          onMouseOver={() => {
            setValue(value)
          }}
          onMouseOut={() => {
            setValue(0)
          }}
        >
          {value === index && (
              <Box sx={{p: 3}}>
                <Typography>{children}</Typography>
              </Box>
          )}
        </Paper>
    );
  }

  function MenuPanel (props: {children: any, value: number, index: number}) {
    const { children, value, index, ...other } = props;

    return (
        <Paper
            className='tab_panel'
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            hidden={value !== index}
            aria-labelledby={`simple-tab-${index}`}
            elevation={2}
            {...other}
            style={{width: '300px'}}
        >
          <MenuList />
        </Paper>
    );
  };
}



export default TopBar;