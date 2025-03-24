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


export default function LspAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 240;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    {
      description: 'Home',
      href: '/lsp'
    },
    {
      description: 'About',
      href: '/lsp/about'
    },
    {
      description: 'Documentation',
      href: 'https://docs.linea.org.br/'
    },
    {
      description: 'Contact',
      href: '/lsp/contact'
    },
    {
      description: 'IDAC',
      href: '/idac'
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
          <Link key={`navitem-${idx}-item`} href={item.href} underline="none" color="inherit">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item.description} href={item.href} />
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
      <AppBar position="static"
        sx={{
          background: '-webkit-linear-gradient(120deg,  #31297f, #0989cb)',
        }}
      >
        <Toolbar>
          <Link href="/lsp">
            <Image src="/linea-symbol.svg" alt="LIneA" width={52} height={40} />
          </Link>
          <List sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map(item => (
              <ListItem key={item.href} sx={{ width: 'auto', }}>
                <Link href={item.href} color="common.white" underline="none">
                  {item.description}
                </Link>
              </ListItem>
            ))}
          </List>
          <Box sx={{ flexGrow: 1 }} />
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