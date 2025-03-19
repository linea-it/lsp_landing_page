import { Container, Grid, Typography, Link } from '@mui/material'
import useStyles from '../styles/pages/tutorials'
export default function Tutorials() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">Idac</Typography>
          <Typography variant="body1" component="span">
            Coming soon...
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}