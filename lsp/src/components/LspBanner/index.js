import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function LspBanner() {
  return (
    <Box sx={{
      background: 'url(/stars.gif)',
      backgroundSize: 'cover',
      minHeight: 400,
    }}>
      <Grid
        container
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
          textAlign: "center",
        }}
      >
        <Grid
          size={12}
          mt={10}
        >
          <Stack direction="row" spacing={2} sx={{
            justifyContent: "center",
            alignItems: "center",
            ml: 4,
            mr: 4,
          }}>
            <Typography
              variant="banner"
              component={"h1"}
              sx={{
                fontSize: {
                  xs: "2em",
                  md: "4em"
                },
                lineHeight: 1.167,
              }}>LIneA Science Platform</Typography>
            <Typography variant="body1" color="info.light">Beta</Typography>
          </Stack>
        </Grid>
        <Grid
          size={12}
        >
          <Typography
            variant="body1"
            color="common.white"
            m={4}
          >
            Welcome to the LIneA Science Platform, a collection of web-based services that offer data access and analysis tools for the astronomical community.
          </Typography>
        </Grid>
      </Grid>
    </Box >
  )
}