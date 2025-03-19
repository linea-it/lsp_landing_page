import React from 'react'
import Box from '@mui/material/Box';
import LspBanner from '@/components/LspBanner';
import Footer from '@/components/Footer';

export default function LspHome() {
  return (
    <Box>

      <LspBanner />
      <Box sx={{ minHeight: 400, backgroundColor: 'gray' }}>LSP HOME page</Box>
      <Footer />
    </Box>

  );
}
