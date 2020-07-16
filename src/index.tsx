import * as React from 'react'
import { Box, Typography } from '@material-ui/core'

interface Props {
  text: string
  color?: string
}

export const ColoredHeadingOne = ({ text, color }: Props) => {
  return <h1 style={{ color }}>{text}</h1>
}

export const ColoredHeadingTwo = ({ text, color }: Props) => {
  return <h2 style={{ color }}>{text}</h2>
}

export const MuiHeader = ({ text }: Props) => {
  return (
    <Box>
      <Typography variant='h1'>{text}</Typography>
    </Box>
  )
}
