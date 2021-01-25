import React, { useState, useRef, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import AppBarCollapse from "./AppBarCollapse";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

import useStyles from "./styles";
import { animateScroll as scroll } from "react-scroll";
import ButtonSong from "../widgets/ButtonSong";
import Fade from "react-reveal/Fade";

export default function AppBarComponent() {
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");

  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box display="flex">
      <Grid container>
        <AppBar position="fixed" className={classes[navRef.current]}>
          <Toolbar className={classes.spacingAppbar}>
            <Box variant="div" className={classes.title}>
              <Fade top>
                <Button
                  color="inherit"
                  className={classes.buttonTitle}
                  onClick={() => scroll.scrollToTop()}
                >
                  CRISTIANSEP
                </Button>
              </Fade>
            </Box>

            <Box component="div" className={classes.menu}>
              <AppBarCollapse />
            </Box>

            <Box component="div" className={classes.buttonSong}>
              <ButtonSong />
            </Box>
          </Toolbar>
        </AppBar>
      </Grid>
    </Box>
  );
}
