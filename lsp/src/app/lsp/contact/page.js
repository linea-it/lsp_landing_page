import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Footer from '@/components/Footer';

export default function LspContact() {
  return (
    <Box>
      <Container>
        <Grid container spacing={2} mt={4}>
          <Grid xs={12}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body1" component="span">
              <p>Comments, questions, suggestions?</p>
              <p>
                Be welcome to open an issue on the{' '}
                <Link
                  href="https://github.com/linea-it/lsp_landing_page"
                  target="_blank"
                  rel="noreferrer"
                >
                  LIneA Science Plataform
                </Link>{' '}
                repository on GitHub, or contact our team.
              </p>
              <p>
                Technical support:{' '}
                <Link
                  href="mailto:helpdesk@linea.org.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  helpdesk@linea.org.br
                </Link>
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>

  );
}