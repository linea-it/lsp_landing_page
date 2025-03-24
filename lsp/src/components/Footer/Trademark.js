import Link from '@mui/material/Link';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export default function FooterTrademark() {

  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          textAlign: 'center',
          fontSize: '0.875rem'
        }}
      >
        LIneA - 2024 - All rights reserved |{' '}
        <Link
          href="https://www.linea.org.br/politica-de-privacidade"
          target="_blank"
        >
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  )
}
