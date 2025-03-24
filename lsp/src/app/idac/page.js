import React from 'react'
import Box from '@mui/material/Box';
import IdacBanner from '@/components/IdacBanner';
import Footer from '@/components/Footer';
import IdacTools from '@/containers/IdacTools';

export default function IdacHome() {
  return (
    <Box>
      <IdacBanner />
      <Box mt={4} sx={{
        maxWidth: 'lg',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <IdacTools />
      </Box>
      <Footer />
    </Box>

  );
}
