import React from 'react'
import Box from '@mui/material/Box';
import LspBanner from '@/components/LspBanner';
import Footer from '@/components/Footer';
import LspTools from '@/containers/LspTools';

export default function LspHome() {
  return (
    <Box>
      <LspBanner />
      <Box mt={4} sx={{
        maxWidth: 'lg',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <LspTools />
      </Box>
      <Footer />
    </Box>

  );
}
