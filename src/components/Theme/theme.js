import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(87, 160, 180)',
    },
    secondary: {
      main: 'rgb(109, 102, 102)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;