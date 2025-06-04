import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import Fade from "react-reveal/Fade";

import Copyright from "../widgets/Copyright";
import { networks } from "../../data";
import { useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.backColor}>
      <Container className={classes.cardGrid} maxWidth="lg" id="contact">
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={6}>
            {networks.map((value) => (
              <BottomNavigation
                width="auto"
                className={classes.socialContent}
                key={value.id}
              >
                <Fade left cascade>
                  <BottomNavigationAction
                    className={classes.social}
                    style={{ padding: 0 }}
                    icon={<GitHub style={{ fontSize: !isMobile ? "30px" : undefined }} />}
                    href={value.urlGit}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <BottomNavigationAction
                    className={classes.social}
                    style={{ padding: 0 }}
                    icon={<Twitter style={{ fontSize: !isMobile ? "30px" : undefined }} />}
                    href={value.urlTwitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <BottomNavigationAction
                    className={classes.social}
                    style={{ padding: 0 }}
                    icon={<LinkedInIcon style={{ fontSize: !isMobile ? "30px" : undefined }} />}
                    href={value.urlIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </Fade>
              </BottomNavigation>
            ))}
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
