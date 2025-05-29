import React from "react";
import Typography from "@material-ui/core/Typography";



export default function Copyright() {
    return (
      <React.Fragment>
        <Typography 
          variant="overline" 
          style={{
            color: "#fff", 
            fontWeight: 700,
            fontSize: "1.1em",
            letterSpacing: '1.5px',
            }} 
            align="center"
            >
          {"Copyright © created by "}
         <Typography 
          variant="overline"
          style={{
            color: "#fff", 
            fontWeight: 700,
            fontSize: "1.1em",
            letterSpacing: '1.5px',
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