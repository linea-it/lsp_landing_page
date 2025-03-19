'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    text: {
      primary: 'rgba(14, 28, 50, 0.87)',
      secondary: 'rgba(14, 28, 50, 0.6)',
      disabled: 'rgba(14, 28, 50, 0.38)'
    }
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    banner: {
      color: 'white',
      // fontSize: '2rem',
      fontFamily: 'Oxanium',
      fontWeight: 100,
      textShadow: 'black 0.1em 0.1em 0.2em'
    },
  },
});

export default theme;