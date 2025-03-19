import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Image from 'next/image'

export default function LspAppBar() {

  const menus = [
    {
      description: 'Home',
      href: '/lsp'
    },
    {
      description: 'About',
      href: '/lsp/about'
    },
    {
      description: 'Tutorials',
      href: '/lsp/tutorials'
    },
    {
      description: 'Contact',
      href: '/contact'
    },
    {
      description: 'IDAC',
      href: '/idac'
    }
  ]

  return (
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
          {menus.map(menu => (
            <ListItem key={menu.href} sx={{ width: 'auto', }}>
              <Link href={menu.href} color="inherit" underline="none">
                {menu.description}
              </Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}