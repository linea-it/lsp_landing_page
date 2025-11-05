import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import FooterLinea from '@/components/Footer/Linea';
import FooterSupports from '@/components/Footer/Supports';
import FooterTrademark from '@/components/Footer/Trademark';
import FooterContact from '@/components/Footer/Contact';
import FooterSocialLinks from '@/components/Footer/SocialLinks';
import Divider from '@mui/material/Divider';

function Footer() {

  return (
    <footer>
      <Box
        sx={{
          m: 8,
          // mt: 8,
          // mb: 8,
          // minHeight: 500,
          maxWidth: 'lg',
          marginLeft: 'auto',
          marginRight: 'auto',
          // justifyContent: "center",
          // alignItems: "center",
        }}>
        <Grid
          container
          spacing={2}
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid size={12}>
            <Divider orientation="horizontal" flexItem />
          </Grid>
          <Grid size={{
            sx: 12,
            lg: 5
          }}>
            <FooterLinea />
          </Grid>
          <Grid size={{
            sx: 12,
            lg: 6
          }}>
            <FooterSupports />
            <FooterContact />
            <FooterSocialLinks />
          </Grid>
          <Grid size={12}>
            <FooterTrademark />
          </Grid>
        </Grid>
      </Box>
    </footer >
  );
}

export default Footer;
