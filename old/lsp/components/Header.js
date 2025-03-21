import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
    AppBar,
    Toolbar,
    List,
    Typography,
    ListItem,
    Box,
    Grid,
    Link as MuiLink
} from '@mui/material'
import Link from './Link'
import useStyles from '../styles/components/Header'

function Header() {
    const classes = useStyles()
    const route = useRouter()

    const menus = [
        {
            description: 'Home',
            href: '/'
        },
        {
            description: 'About',
            href: '/about'
        },
        {
            description: 'Tutorials',
            href: '/tutorials'
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
        <Box>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Link href="/" className={classes.logoLink}>
                        <Image src="/linea-symbol.svg" alt="LIneA" width={52} height={40} />
                    </Link>
                    <List className={classes.menuList}>
                        {menus.map(menu => (
                            <ListItem key={menu.href} className={classes.menuListItem}>
                                <Link href={menu.href} className={classes.menuLink}>
                                    {menu.description}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Box className={classes.separator} />
                </Toolbar>
            </AppBar>

            {route.pathname === '/' && (
                <Grid className={classes.banner}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        className={classes.container}
                    >
                        <Grid item xs={12} className={classes.titleWrapper}>
                            <Typography className={classes.title}>LIneA Science Platform</Typography>
                            Welcome to the LIneA Science Platform, a collection of web-based services to offer data access and analysis tools for the astronomical community.
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Box>
    )
}

export default Header
