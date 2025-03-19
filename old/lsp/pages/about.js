import { Container, Grid, Typography, Link } from '@mui/material'
import useStyles from '../styles/pages/about'
export default function About() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">About</Typography>
          <Typography variant="body1" component="span">
            <p>
              The LIneA Science Platform is a collection of web-based services to offer data access and analysis tools for the astronomical community. It is the central place to access the
              {' '}
              <Link
                href="http://www.lsst.org"
                target="_blank"
                rel="noreferrer"
              >
                Legacy Survey of Space and Time
              </Link>{' '}
              (LSST) data that is hosted in the
              {' '}
              <Link
                href="https://linea.org.br/o-que-e-linea/centro-de-dados/visao-global/"
                target="_blank"
                rel="noreferrer"
              >
                Brazilian Independent Data Acces Center
              </Link>{' '}
              (IDAC) (LSST credentials required), available to the whole LSST community.
            </p>
            <p>
              The platform offers storage space, computing power, and help from specialists to support the
              {' '}
              <Link
                href="https://linea.org.br/010-ciencia/projetos/4-lsst/brasil-na-era-do-lsst/"
                target="_blank"
                rel="noreferrer"
              >
                LSST Brazilian Participation Group
              </Link>{' '}
              (BPG) with the big data challenges imposed by LSST.
            </p>
            <p>
              For the general public, it provides analysis tools and access to public data from previous astronomical surveys such as the
              {' '}
              <Link
                href="http://www.darkenergysurvey.org"
                target="_blank"
                rel="noreferrer"
              >
                Dark Energy Survey
              </Link>{' '}
              (DES) and the
              {' '}
              <Link
                href="http://www.sdss.org"
                target="_blank"
                rel="noreferrer"
              >
                Sloan Sky Digital Survey
              </Link>{' '}
              (SDSS) (institutional or Google account required). It will also provide access to LSST public data releases when they become available in the future.
            </p>
            <p>
              <strong>Jupyterhub</strong> - a multi-user interactive development tool based on iPython Notebooks that allows users to combine interactive code, output results, structured text, and multimedia resources in the same document.
            </p>
            <p>
              <strong>Science Server</strong> - a set of tools to explore, visualize, and interact with coadded images from photometric surveys. The current version contains images from the two public data releases of DES (DR1 and DR2).
            </p>
            <p>
              <strong>User Query</strong> - a service to provide access to the catalog database for users to explore tabular data and create user-generated samples. The current version contains catalogs from the two public data releases of DES (DR1 and DR2).
            </p>
          </Typography>
          <Typography variant="h6">About us</Typography>
          <Typography variant="body1" component="span">
            <p>
              LIneA is a multi-user laboratory operated by a non-profit organization with financial support from the Brazilian Ministry of Science, Technology, and Innovation. Our mission is to support the Brazilian astronomical community with computing infrastructure and big data analysis expertise to provide technical conditions for participation in large astronomical surveys, such as SDSS, DES, and LSST.
            </p>
            {' '}
            <p>
              If you are a Portuguese speaker, please find more about LIneA on our
              {' '}
              <Link
                href="https://youtu.be/jC-k85tfd0Y"
                target="_blank"
                rel="noreferrer"
              >
                YouTube Channel
              </Link>{' '}
              and
              {' '}
              <Link
                href="http://linea.org.br"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </Link>{' '}.
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}