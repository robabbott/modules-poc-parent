import * as React from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/icons-material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './src/theme';
import Navigator from './src/navigator';

const drawerWidth = 256;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  addEventListener(
    'toggle-navbar',
    function (e) {
      handleDrawerToggle();
    },
    false
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        {isSmUp ? null : (
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        )}

        <Navigator
          PaperProps={{ style: { width: drawerWidth } }}
          sx={{ display: { sm: 'block', xs: 'none' } }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}
