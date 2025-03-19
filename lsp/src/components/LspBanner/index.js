import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export default function LspBanner() {
  return (
    <Box sx={{
      background: 'url(/stars.gif)',
      backgroundSize: 'cover',
      minHeight: 400
    }}>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Grid item xs={12} mt={10}>
          <Typography
            variant="banner"
            sx={{
              fontSize: "4rem",
              lineHeight: 1.167,
              fontWeight: 300,
            }}>LIneA Science Platform</Typography>
        </Grid>
        <Grid item xs={12} mt={4}>
          <Typography
            variant="body1"
            color="common.white"
          >
            Welcome to the LIneA Science Platform, a collection of web-based services to offer data access and analysis tools for the astronomical community.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}