import React from "react";
import Container from "@material-ui/core/Container";

import Copyright from "../widgets/Copyright";
import { networks } from "../../data";
import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();
  const [value] = networks;

  const links = [
    { label: "GitHub", href: value.urlGit },
    { label: "LinkedIn", href: value.urlIn },
    { label: "Twitter", href: value.urlTwitter },
  ];

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.inner}>
        <Copyright />
        <nav className={classes.social} aria-label="Redes sociales">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
