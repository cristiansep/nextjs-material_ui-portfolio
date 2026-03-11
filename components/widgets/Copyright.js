import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, useMediaQuery, useTheme } from '@material-ui/core';


export default function Copyright() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Typography
          variant="overline"
          style={{
            color: "rgba(255, 255, 255, 0.35)",
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 400,
            fontSize: !isMobile ? "0.85em" : '0.7em',
            letterSpacing: !isMobile ? '3px' : '2px',
            }}
            align="center"
            >
          {"Copyright \u00A9 "}
         <Typography
          variant="overline"
          component="span"
          style={{
            color: "rgba(57, 200, 250, 0.7)",
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 500,
            fontSize: "1em",
            letterSpacing: 'inherit',
            }}
          >
         {"cristiansep "}
         </Typography>
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    );
  }
