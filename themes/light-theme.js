import { createTheme } from "@material-ui/core";

export const lightTheme = createTheme({
    palette: {
      type: 'dark',
      background: {
        default: '#060614',
        paper: '#0d0d2b',
      },
    },
    typography: {
      fontFamily: [
        'Outfit',
        'Syne',
        'sans-serif'
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            background: 'radial-gradient(ellipse at 20% 0%, #0f0f3d 0%, #060614 40%), radial-gradient(ellipse at 80% 100%, #0a0a2e 0%, #060614 50%)',
            backgroundAttachment: 'fixed',
          },
        },
      },
    },
  });
