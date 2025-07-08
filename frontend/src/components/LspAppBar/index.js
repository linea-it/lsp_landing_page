'use client'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Image from 'next/image'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoggedUser from '@/components/LoggedUser';
import { useAuth } from '@/contexts/AuthContext';


export default function LspAppBar(props) {
  const { user, settings } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 240;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    {
      description: 'Home',
      href: '/lsp',
      target: '_self',
    },
    {
      description: 'About',
      href: '/lsp/about',
      target: '_blank',
    },
    {
      description: 'Documentation',
      href: 'https://docs.linea.org.br/',
      target: '_blank',
    },
    {
      description: 'Contact',
      href: '/lsp/contact',
      target: '_blank',
    },
    {
      description: 'IDAC',
      href: '/idac',
      target: '_blank',
    }
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LIneA Science Platform
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <Link key={`navitem-${idx}-item`} href={item.href} underline="none" color="inherit" target={item.target}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item.description} href={item.href} target={item.target} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <AppBar position="fixed"
        sx={{
          background: '-webkit-linear-gradient(120deg,  #31297f, #0989cb)',
        }}
      >
        <Toolbar>
          <Image src="/linea-symbol.svg" alt="LIneA" width={52} height={40} />
          <List sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map(item => (
              <ListItem key={item.href} sx={{ width: 'auto', }}>
                <Link href={item.href} color="common.white" underline="none" target={item.target}>
                  {item.description}
                </Link>
              </ListItem>
            ))}
          </List>
          <Box sx={{ flexGrow: 1 }} />
          {user && (
            <LoggedUser username={user?.username} />
          )}
          {!user && (
            <Button href={settings.login_url} color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>
              Sign In
            </Button>
          )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }} // Hidden on desktop
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* https://mui.com/material-ui/react-app-bar/#fixed-placement */}
      {/* The toolbar is used to create space for the AppBar */}
      <Toolbar />
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, // Hidden on desktop
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </React.Fragment>
  )
}