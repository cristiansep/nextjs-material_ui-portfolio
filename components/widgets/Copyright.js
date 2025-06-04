import React from "react";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery, useTheme } from '@material-ui/core';


export default function Copyright() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <React.Fragment>
        <Typography 
          variant="overline" 
          style={{
            color: "#fff", 
            fontWeight: 700,
            fontSize: !isMobile ? "1.1em" : undefined,
            letterSpacing: !isMobile ? '1.5px' : undefined,
            }} 
            align="center"
            >
          {"Copyright © created by "}
         <Typography 
          variant="overline"
          style={{
            color: "#fff", 
            fontWeight: 700,
            fontSize: !isMobile ? "1.1em" : undefined,
            letterSpacing: !isMobile ? '1.5px' : undefined,
            }} 
          >
         {"cristiansep "}
         </Typography>
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </React.Fragment>
    );
  }