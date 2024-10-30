// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#FF5722',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h3: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
