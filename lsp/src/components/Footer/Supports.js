import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Image from 'next/image'
import Box from '@mui/material/Box'
import SupportImage from '@/components/SupportImage';
import Typography from '@mui/material/Typography';

export default function FooterSupports() {

  const supports = [{
    href: "https://www.linea.org.br/inct#inct",
    src: "/inct-logo.png",
    alt: "INCT"
  }, {
    href: "https://www.gov.br/capes/pt-br",
    src: "/capes-logo.png",
    alt: "CAPES"
  }, {
    href: "https://www.gov.br/cnpq/pt-br",
    src: "/cnpq-logo.png",
    alt: "CNPq"
  }, {
    href: "https://www.faperj.br",
    src: "/faperj-logo.png",
    alt: "FAPERJ"
  }, {
    href: "http://www.finep.gov.br",
    src: "/finep-logo.png",
    alt: "FINEP"
  }]

  return (
    <Box sx={{
      ml: 4,
      mr: 4
    }}>
      <Typography variant="body2" sx={{ color: '#a3a3a3', fontSize: '.9rem' }}>
        Support:
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
        {supports.map(({ href, src, alt }) => (
          <Box key={alt} sx={{ margin: '0 2px' }}>
            <SupportImage href={href} src={src} alt={alt} />
          </Box>
        ))}
      </Box>
    </Box>
  )

}
