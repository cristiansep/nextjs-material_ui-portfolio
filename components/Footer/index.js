import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";



import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

import Fade from 'react-reveal/Fade';
import Copyright from "../Copyright";


import useStyles from './styles';


export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.backColor}>
       
      <Container className={classes.cardGrid} maxWidth="lg" id="contact">
        <Grid container spacing={1} direction="column" justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            <BottomNavigation width="auto" className={classes.socialContent}>
            <Fade left cascade>
              <BottomNavigationAction
                className={classes.social}
                style={{ padding: 0 }}
                icon={<GitHub />}
              />
              <BottomNavigationAction
                className={classes.social}
                style={{ padding: 0 }}
                icon={<Twitter />}
              />
              <BottomNavigationAction
                className={classes.social}
                style={{ padding: 0 }}
                icon={<Instagram />}
              />
              </Fade>
            </BottomNavigation>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
          <Fade right>
            <Copyright />
          </Fade>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
