import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    title: {
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.down("sm")]: {
        paddingBottom: theme.spacing(5),
      },
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(3),
    },
    titleLine: {
      width: '4px',
      height: '2.2em',
      background: 'linear-gradient(180deg, #39c8fa 0%, #a78bfa 100%)',
      borderRadius: '4px',
      flexShrink: 0,
      [theme.breakpoints.down("sm")]: {
        width: '3px',
        height: '1.8em',
      },
    },
    titleText: {
      fontFamily: 'Syne, sans-serif',
      fontWeight: 700,
      fontSize: '2em',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#ffffff',
      margin: 0,
      lineHeight: 1,
      [theme.breakpoints.down("sm")]: {
        fontSize: '1.4em',
        letterSpacing: '2px',
      },
    },
    titleAccent: {
      display: 'block',
      fontFamily: 'Outfit, sans-serif',
      fontSize: '0.4em',
      fontWeight: 400,
      letterSpacing: '6px',
      color: '#39c8fa',
      opacity: 0.7,
      marginTop: '6px',
      textTransform: 'uppercase',
      [theme.breakpoints.down("sm")]: {
        letterSpacing: '4px',
        fontSize: '0.45em',
      },
    },
  }));

const subtitles = {
  'Sobre mi': 'Conociéndome',
  'Servicios': 'Lo que ofrezco',
  'Proyectos': 'Mi trabajo',
  'Contacto': 'Hablemos',
};

export default function Title({title}){
    const classes = useStyles();
    return (
        <div className={classes.title}>
          <Fade left>
            <div className={classes.titleContainer}>
              <div className={classes.titleLine} />
              <h1 className={classes.titleText}>
                {title}
                {subtitles[title] && (
                  <span className={classes.titleAccent}>{subtitles[title]}</span>
                )}
              </h1>
            </div>
          </Fade>
        </div>
    )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
