'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import LockIcon from '@mui/icons-material/Lock';
import PropTypes from 'prop-types'

export default function ToolsCard({ imageSrc, imageAlt, title, description, href, isPrivate }) {

  return (
    // Utilizei CardActionArea para ter o efeito de over e click no card inteiro
    // Utilizei o Link para ter o comportamento de exibir a url no navegador. 
    <CardActionArea>
      <Link href={href} underline="none">
        <Card
          elevation={3}
          sx={{
            display: 'flex'
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 200,
              // height: 200 
            }}
            image={imageSrc}
            alt={imageAlt}
          />
          <Box>
            <CardContent m={2}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              {isPrivate && (
                <Chip
                  label="Members only"
                  size="small"
                  variant="outlined"
                  color="warning"
                  icon={<LockIcon />}
                  sx={{
                    mt: 2,
                  }}
                />)}
            </CardContent>
          </Box>
        </Card>
      </Link>
    </CardActionArea>
  )
}

ToolsCard.defaultProps = {
  imageSrc: 'placeholder_200x200.png',
  imageAlt: 'placeholder logo 200x200',
  isPrivate: false
}
ToolsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  isPrivate: PropTypes.bool
}