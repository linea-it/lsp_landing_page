import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

export default function IdacBanner() {
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
            <Image
              src="/brazilian_flag_58x40.png"
              alt="Brazilian Flag"
              width={58}
              height={40}
            />
            <Typography
              variant="banner"
              component={"h1"}
              sx={{
                fontSize: {
                  xs: "1.5em",
                  md: "4em"
                },
                lineHeight: 1.167,
              }}>LSST Brazilian Independent</Typography>
          </Stack>
        </Grid>
        <Grid
          size={12}
          sx={{
            mb: 4,
          }}
        >
          <Stack direction="row" spacing={2} sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Typography
              variant="banner"
              sx={{
                fontSize: {
                  xs: "1.5em",
                  md: "4em"
                },
                lineHeight: 1.167,
                fontWeight: 300,
              }}>Data Access Center</Typography>
            <Typography variant="body1" color="info.light">Beta</Typography>
          </Stack>
        </Grid>
        <Grid
          size={12}
        >
          <Typography
            variant="body1"
            color="common.white"
            m={2}
          >
            Welcome to the Brazilian IDAC’s Science Platform, a collection of web-based services that offer data access and analysis tools for the LSST community.
          </Typography>
        </Grid>
        <Grid
          size={12}
        >
          <Image
            src="/lsst_idac_logo_180x180.png"
            alt="Lsst IDAC Brazilian logo"
            width={180}
            height={180}
          />
        </Grid>
      </Grid>
    </Box >
  )
}