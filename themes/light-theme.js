import { createTheme } from "@material-ui/core";

export const lightTheme = createTheme({
    palette: {
      type: 'dark',
      background: {
        default: '#0a0a23',
        paper: '#1a1a3e',
      },
    },
    typography: {
      fontFamily: [
        'Orbitron',
        'Space Grotesk',
        'Inter',
        'Montserrat',
        'Roboto',
        'Arial',
        'sans-serif'
      ].join(','),        
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a3e 50%, #0a0a23 100%)',
            backgroundAttachment: 'fixed',
          },
        },
      },
    },
  });