import Head from 'next/head'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link
} from '@mui/material'
import Alert from '@mui/material/Alert';
import useStyles from '../styles/pages/index'
import { useRouter } from 'next/router'

export default function Home({ interfaces }) {
  const classes = useStyles()
  const router = useRouter();

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
              <Card>
                <div className={item.disabled ? classes.applicationDisabled : classes.applicationEnabled}>
                  <Link href={item.href} className={classes.titleLink}>
                    <CardActionArea>
                      <CardMedia
                        alt={item.title}
                        className={classes.media}
                        image={item.background}
                        title={item.title}
                      >
                        <Typography
                          className={classes.titleItemWhite}
                          variant="h4"
                          component="h2"
                        >
                          {item.title}
                        </Typography>
                        <Typography className={classes.comingSoon}
                          variant="h4"
                          component="h2">
                        </Typography>
                      </CardMedia>
                    </CardActionArea>
                  </Link>
                </div>
                {item.disabled && (
                  <CardContent className={classes.applicationEnabled}>
                    <Alert variant="outlined" severity="info">
                      {`${item.title} - Coming soon.`}
                    </Alert>
                  </CardContent>
                )}
              </Card>

            </Grid>
          ))}
        </Grid>
      </Grid>
    </div >
  )
}

export const getServerSideProps = async ctx => {

  const host = ctx.req.headers.host || null;

  const interfaces = [
    {
      title: 'Jupyterhub',
      href: 'https://jupyter.linea.org.br',
      background: '/interfaces/jupyterhub.jpg',
    },
    {
      title: 'Science Server',
      href: 'https://scienceserver.linea.org.br/',
      background: '/interfaces/science_server.png',
    },
    {
      title: 'User Query',
      href: 'https://scienceserver-dev.linea.org.br/daiquiri/query/',
      background: '/interfaces/user_query.png',
      disabled: host === 'https://lsp.linea.org.br' ? true : false
    }
  ]


  return {
    props: { interfaces: interfaces }
  }
}
