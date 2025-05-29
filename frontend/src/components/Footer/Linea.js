import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function FooterLinea() {

  return (
    <Box sx={{
      ml: 4,
      mr: 4
    }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Image
          src="/linea-logo.png"
          alt="LIneA logo"
          width={145}
          height={120}
          href="https://www.linea.org.br/"
        />

        <Typography
          variant="h6"
          sx={{
            marginBottom: 'auto',
            marginTop: 'auto',
          }}
        >
          Associação Laboratório
          <br />
          Interinstitucional de
          <br />
          e-Astronomia LIneA
        </Typography>
      </Stack>
      <Stack
        mt={6}
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Typography
          variant="body2"
          textAlign={'left'}
        >
          Av. Pastor Martin Luther King Jr, 126 - Del Castilho
          <br />
          Nova América Offices, Torre 3000 / sala 817.
          <br />
          CEP: 20765-000 – Rio de Janeiro - RJ, Brasil
        </Typography>

        <Typography
          variant="body1"
          textAlign={'center'}
          sx={{
            background: '-webkit-linear-gradient(120deg, #0989cb, #31297f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          #PeloFuturoDaCiência &nbsp; #PeloFuturoDaAstronomia
        </Typography>
      </Stack>
    </Box >
  )
}
