import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Image from 'next/image'

export default function IdacAppBar() {

  const menus = [
    {
      description: 'Home',
      href: '/idac'
    },
    {
      description: 'About',
      href: '/idac/about'
    },
    {
      description: 'Documentation',
      href: 'https://docs.linea.org.br/'
    },
    {
      description: 'Contact',
      href: '/idac/contact'
    },
    {
      description: 'LSP',
      href: '/lsp'
    },
    {
      description: 'RSP',
      href: 'https://usdf-rsp.slac.stanford.edu/'
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
              <Link href={menu.href} color="common.white" underline="none">
                {menu.description}
              </Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}