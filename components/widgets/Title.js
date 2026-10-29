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
    meta: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-mute)',
      marginBottom: theme.spacing(3),
    },
    index: {
      color: 'var(--flare)',
    },
    rule: {
      flex: 1,
      height: 1,
      background: 'var(--line)',
    },
    titleText: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: 'var(--ink)',
      margin: 0,
      '& em': {
        color: 'var(--signal)',
      },
    },
  }));

/**
 * Encabezado de sección con índice numerado estilo bitácora
 * @param {string} index - Número de sección ("01")
 * @param {string} kicker - Etiqueta corta en monoespaciada
 * @param {string} title - Título principal
 * @param {string} accent - Parte del título en cursiva
 */
export default function Title({ index, kicker, title, accent }){
    const classes = useStyles();
    return (
        <div className={classes.title}>
          <Fade bottom distance="20px">
            <div>
              <div className={classes.meta}>
                <span className={classes.index}>{index}</span>
                <span>{kicker}</span>
                <span className={classes.rule} />
              </div>
              <h2 className={classes.titleText}>
                {title}{accent && <> <em>{accent}</em></>}
              </h2>
            </div>
          </Fade>
        </div>
    )
}

Title.propTypes = {
  index: PropTypes.string.isRequired,
  kicker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  accent: PropTypes.string,
};
