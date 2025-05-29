
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
        'Orbitron',
        'Space Grotesk',
        'Inter',
        'Montserrat',
        'Roboto',
        'Arial',
        'sans-serif'
      ].join(','),        
      },

    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Orbitron';
            font-style: normal;
            font-display: swap;
            font-weight: 400
          }
        `,
      },
    }
  });