import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Footer from '@/components/Footer';

export default function LspTutorials() {
  return (
    <Box>
      <Container>
        <Grid container spacing={8} mt={4}>
          <Grid item xs={12}>
            <Typography variant="h6">Tutorials</Typography>
            <Typography variant="body1" component="span">
              <p>
                The support material for new users of the LSP services is offered as video tutorials on YouTube.
              </p>
              <ul>
                <li>A series of short video tutorials about the LIneA Science Server is available
                  {' '}
                  <Link
                    href="https://youtu.be/dUowU0F0Ik0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </Link>.
                </li>
                <li>A ~1.5-hour-long tutorial about LIneA JupyterHub is available
                  {' '}
                  <Link
                    href="https://youtu.be/7AXGf91CDJ0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </Link>.
                </li>
              </ul>
              <p>
                There is also a private Google Classroom page with recorded lessons and support material in pdf from the last editions of the LIneA Minicurso. If you are interested in going deeper into the Science Server tools, Github (basic and advanced), or learning the basics of Python and SQL, please contact the department of education at
                {' '}
                <Link
                  href="mailto:cde@linea.org.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  cde@linea.org.br
                </Link>{' '}
                and request access to our courses for free.
              </p>
              <p>
                Note: the recorded lessons and support material are available in Portuguese.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>

  );
}