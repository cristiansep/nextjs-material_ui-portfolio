import { createTheme } from "@material-ui/core";

export const lightTheme = createTheme({
    palette: {
      type: 'dark',
      background: {
        default: '#05060d',
        paper: '#0b0d18',
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
            background: '#05060d',
            backgroundAttachment: 'fixed',
          },
        },
      },
    },
  });
