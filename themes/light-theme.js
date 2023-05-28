
import { createTheme } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";


export const lightTheme = createTheme({
    palette: {
      mode: 'light',
    //   background: {
    //       default: grey[300]
    //   },
    //   primary: {
    //       main: '#4a148c'
    //   },
    //   secondary: {
    //       main: '#19857b'
    //   },
    //   error: {
    //       main: red.A400
    //   },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),        
      },

    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Bitter';
            font-style: normal;
            font-display: swap;
            font-weight: 400
          }
        `,
      },
    }
  });