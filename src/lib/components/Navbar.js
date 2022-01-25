import React from 'react';
import { theme } from './Theme';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  ThemeProvider,
  CssBaseline,
  Divider,
  Drawer,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';

const categories = [
  {
    id: 'Build',
    children: [
      {
        id: 'Authentication',
        icon: <PeopleIcon />,
        route: '/authentication',
      },
      {
        id: 'Database',
        icon: <DnsRoundedIcon />,
        route: '/database',
      },
    ],
  },
];

const item = {
  'py': '2px',
  'px': 3,
  'color': 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

const Navbar = (props) => {
  const IsActive = (route) => {
    return route === useLocation().pathname;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Drawer
        variant='permanent'
        PaperProps={{ style: { width: 256 } }}
        sx={{ display: { sm: 'block', xs: 'none' } }}
      >
        <List disablePadding>
          <ListItem
            sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}
          >
            Paperbase
          </ListItem>
          <ListItem sx={{ ...item, ...itemCategory }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Project Overview</ListItemText>
          </ListItem>
          {categories.map(({ id, children }) => (
            <Box key={id} sx={{ bgcolor: '#101F33' }}>
              <ListItem sx={{ py: 2, px: 3 }}>
                <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, route }) => (
                <ListItem disablePadding key={childId}>
                  <ListItemButton
                    // selected={IsActive(route)}
                    sx={item}
                    component={RouterLink}
                    to={route}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar