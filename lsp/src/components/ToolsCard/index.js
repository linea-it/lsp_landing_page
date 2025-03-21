
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export default function ToolsCard({ imageSrc, imageAlt, title, description }) {
  return (
    <Card
      elevation={3}
      sx={{
        display: 'flex'
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 200, height: 200 }}
        image={imageSrc}
        alt={imageAlt}
      />
      <Box>
        <CardContent m={2} sx={{
          // maxWidth: 500 
        }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

ToolsCard.defaultProps = {}
ToolsCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}