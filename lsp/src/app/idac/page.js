import React from 'react'
import Box from '@mui/material/Box';
import IdacBanner from '@/components/IdacBanner';
import Footer from '@/components/Footer';
import LspTools from '@/containers/LspTools';

export default function IdacHome() {
  return (
    <Box>
      <IdacBanner />
      <Box mt={4} sx={{
        maxWidth: 'lg',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        IDAC
        {/* <LspTools /> */}
      </Box>
      <Footer />
    </Box>

  );
}
