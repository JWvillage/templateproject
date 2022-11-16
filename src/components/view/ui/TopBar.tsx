import React, {useEffect} from 'react';
import {Box, Container, Grid, Tab, Tabs, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function TabPanel(props: {children: any, value: number, index: number}) {
  const { children, value, index, ...other } = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
      >
        {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
        )}
      </div>
  );
}

const LinkTab = (props: {label: string; href: string, mouseover: (e: any, i: number) => void, value: number}) => {

  const navigate = useNavigate()

  let underStyle = document.getElementsByClassName('MuiTabs-indicator')[0]

  useEffect(() => {

    return (
        document.getElementsByClassName('MuiTabs-indicator')[0].classList.remove('css-1aquho2-MuiTabs-indicator')
    )
  },[])

  return (
      <Tab
          className="navLink"
          onClick={(event: any) => {
            event.preventDefault();
            const step1 = event.target.href.toString()
            const step2 = step1.split('/')
            navigate("/" + step2.at(step2.length - 1))
          }}
          onMouseOver={(event: any) => {
            event.preventDefault();

            const _navi = event.target.href.toString().split('/')
            const navi = _navi.at(_navi.length - 1)
            // console.log(navi)
            event.target.classList.add('Mui-selected')
            event.target.ariaSelected = true
            switch (navi) {
              case 'adopt':
                underStyle.setAttribute('style', 'left: 0px; width: 90px');
                break;
              case 'sitter':
                underStyle.setAttribute('style', 'left: 90px; width: 90px');
                break;
              case 'shop':
                underStyle.setAttribute('style', 'left: 180px; width: 90px');
                break;
            }
            // console.log(underStyle.getAttribute('style'))
          }}
          onMouseOut={(event: any) => {
            event.target.classList.remove('Mui-selected')
            underStyle.setAttribute('style', ' width: 0px')
            event.target.ariaSelected = false
          }}
          {...props}
      />
  );
}

const TopBar = () => {

  const [value, setValue] = React.useState(0);

  const navLink = [
    {label: '입양', href: '/adopt'},
    {label: '펫시터', href: '/sitter'},
    {label: '쇼핑몰', href: '/shop'},
  ]

  const handleChange = (event: any, newValue: number) => {
    console.log(newValue)
    setValue(newValue);
  };


  return (
    <Container className='top'>
      <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{height: '50px'}}
      >
        <Grid xs={2}>
          <Grid container>
            <img src="static/img/main_logo.png" alt="" width="50px"/>
          </Grid>
        </Grid>
        <Grid xs={10}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Box>

              <Box>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                  {navLink.map((content, i) => {
                    return (
                      <LinkTab key={i} label={content.label} href={content.href} mouseover={handleChange} value={i}/>
                    )
                  })}
                  {/*<LinkTab label="Page One" href="/drafts" />*/}
                  {/*<LinkTab label="Page Two" href="/trash" />*/}
                  {/*<LinkTab label="Page Three" href="/spam" />*/}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopBar;