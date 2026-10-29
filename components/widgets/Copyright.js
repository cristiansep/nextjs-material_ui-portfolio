import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  copy: {
    margin: 0,
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--ink-mute)',
  },
});

export default function Copyright() {
  const classes = useStyles();

  return (
    <p className={classes.copy}>
      © {new Date().getFullYear()} Cristian Sepúlveda — Hecho en Temuco, Chile
    </p>
  );
}
