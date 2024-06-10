import { createTheme } from '@mui/material/styles'
import { pink, red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    text:{
      secondary:pink[800]
    }
  }
})

export default theme