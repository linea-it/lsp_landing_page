import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Footer from '@/components/Footer';

export default function LspAbout() {
  return (
    <Box>
      <Container>
        <Grid container spacing={8} mt={4}>
          <Grid size={12}>
            <Typography variant="h6">About</Typography>
            <Typography variant="body1" component="span">
              <p>
                The LIneA Science Platform is a collection of web-based services that offer data access and analysis tools for the astronomical community.
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
                </Link>.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>

  );
}