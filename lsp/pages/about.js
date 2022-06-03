import { Container, Grid, Typography } from '@mui/material'
import useStyles from '../styles/pages/about'
export default function About() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">About us</Typography>
          <Typography variant="body1" component="span">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Vitae et leo duis ut diam quam nulla porttitor. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Purus ut faucibus pulvinar elementum integer enim neque. Diam vulputate ut pharetra sit amet aliquam id. Sed arcu non odio euismod lacinia at quis risus. Tortor condimentum lacinia quis vel eros donec. Iaculis nunc sed augue lacus viverra vitae. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Eget velit aliquet sagittis id consectetur. Lectus arcu bibendum at varius vel. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Egestas maecenas pharetra convallis posuere morbi leo urna. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Vel pharetra vel turpis nunc eget. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.
            </p>
            <p>
              Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Tellus rutrum tellus pellentesque eu tincidunt. Elementum facilisis leo vel fringilla. Non tellus orci ac auctor. Cursus turpis massa tincidunt dui ut ornare. Sit amet dictum sit amet. Viverra orci sagittis eu volutpat odio facilisis mauris. Nam at lectus urna duis. Dui nunc mattis enim ut. Egestas dui id ornare arcu odio ut sem. Diam quis enim lobortis scelerisque fermentum dui. Odio tempor orci dapibus ultrices in iaculis. Pellentesque dignissim enim sit amet venenatis urna cursus. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tempor orci eu lobortis elementum. Dictum varius duis at consectetur lorem donec massa sapien. Orci sagittis eu volutpat odio facilisis mauris sit. Vitae sapien pellentesque habitant morbi tristique senectus. Sed nisi lacus sed viverra tellus in hac. Tortor condimentum lacinia quis vel eros.
            </p>
            <p>
              Adipiscing enim eu turpis egestas pretium. Eget mi proin sed libero. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Lorem mollis aliquam ut porttitor leo. Feugiat sed lectus vestibulum mattis ullamcorper. A pellentesque sit amet porttitor eget dolor morbi non. Sed lectus vestibulum mattis ullamcorper velit sed. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Euismod nisi porta lorem mollis aliquam. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Nullam non nisi est sit. Malesuada nunc vel risus commodo viverra. Risus feugiat in ante metus dictum at. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Molestie ac feugiat sed lectus vestibulum mattis.
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}