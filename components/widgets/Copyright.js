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
            color: "#c7c9d1", 
            fontWeight: 700,
            fontSize: !isMobile ? "1.1em" : undefined,
            letterSpacing: !isMobile ? '2px' : '1px',
            textShadow: '0 0 8px rgba(57, 200, 250, 0.3)',
            }} 
            align="center"
            >
          {"Copyright © created by "}
         <Typography 
          variant="overline"
          component="span"
          style={{
            color: "#39c8fa", 
            fontWeight: 700,
            fontSize: !isMobile ? "1.1em" : undefined,
            letterSpacing: !isMobile ? '2px' : '1px',
            textShadow: '0 0 10px rgba(57, 200, 250, 0.6)',
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