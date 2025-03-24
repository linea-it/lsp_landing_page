import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function FooterContact() {

  return (
    <Stack
      // direction="row"
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      sx={{
        mt: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
      >
        e-mail:{' '}
        <Link
          href="mailto:secretaria@linea.org.br"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          secretaria@linea.org.br
        </Link>
      </Typography>
      <Typography
        variant="body1"
      >
        tel:{' '}
        <Link
          href="tel:+5521969379224"
          sx={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          +55 21 96937 9224
        </Link>
      </Typography>
    </Stack>
  )
}
