import React from "react";
import Typography from "@material-ui/core/Typography";



export default function Copyright() {
    return (
      <React.Fragment>
        <Typography variant="overline" style={{color: "#fff"}} align="center">
          {"Copyright © created by "}
         <Typography variant="overline">
         {"cristiansep "}
         </Typography>
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </React.Fragment>
    );
  }