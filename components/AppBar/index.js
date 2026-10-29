import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { animateScroll as scroll } from "react-scroll";

import AppBarCollapse from "./AppBarCollapse";
import ButtonSong from "../widgets/ButtonSong";
import useStyles from "./styles";

export default function AppBarComponent() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState("appBarTransparent");

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 80 ? "appBarSolid" : "appBarTransparent");
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" className={classes[navBackground]}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className={classes.toolbar}>
          <button type="button" className={classes.logo} onClick={() => scroll.scrollToTop()}>
            Cristian<em>Sep</em>
          </button>

          <AppBarCollapse />

          <ButtonSong />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
