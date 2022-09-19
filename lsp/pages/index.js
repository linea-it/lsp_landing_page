import Head from 'next/head'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Link
} from '@mui/material'
import useStyles from '../styles/pages/index'

export default function Home() {
  const classes = useStyles()

  const interfaces = [
    {
      title: 'Jupyterhub',
      href: 'https://jupyter.linea.org.br',
      background: '/interfaces/jupyterhub.jpg',
      titleClass: classes.titleItemBlack
    },
    {
      title: 'Science Server',
      href: 'https://scienceserver.linea.org.br/',
      background: '/interfaces/science_server.png',
      titleClass: classes.titleItemWhite
    },
    {
      title: 'User Query',
      href: 'https://scienceserver-dev.linea.org.br/daiquiri/query/',
      background: '/interfaces/user_query.png',
      titleClass: classes.titleItemWhite
    }
  ]

  return (
    <div className={classes.root}>
      <Head>
        <title>LIneA Science Platform</title>
      </Head>
      <Grid className={classes.main}>
        <Grid
          container
          justifyContent="center"
          alignItems="stretch"
          className={classes.interfaceContainer}
        >
          {interfaces.map(item => (
            <Grid
              key={item.title}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.gridApplicationLg}
            >
              <Link href={item.href} className={classes.titleLink}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      alt={item.title}
                      className={classes.media}
                      image={item.background}
                      title={item.title}
                    >
                      <Typography
                        // gutterBottom
                        // className={classes.titleItem}
                        className={item.titleClass}
                        variant="h4"
                        component="h2"
                      >
                        {item.title}
                      </Typography>
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}
