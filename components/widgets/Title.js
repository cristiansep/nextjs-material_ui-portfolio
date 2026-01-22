import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    title: {
      color: '#39c8fa',
      paddingBottom: theme.spacing(8),
      fontWeight: 700,
      textShadow: '0 0 10px rgba(57, 200, 250, 0.5)',
      [theme.breakpoints.down("sm")]: {
        paddingBottom: theme.spacing(4),
      },
    },
    titleBorder: {
      color: '#39c8fa',
      margin: 10,
      padding: 5,
      border: '0px solid #7b68ee',
      borderLeftWidth: '0.4em',
      letterSpacing: '2px',
      fontWeight: 700,
      fontSize: '1.5em',
      textTransform: 'uppercase',
      textShadow: '0 0 15px rgba(57, 200, 250, 0.6)',
      [theme.breakpoints.down("sm")]: {
        fontSize: '1.1em',
        letterSpacing: '1px',
        margin: 5,
        padding: 3,
        borderLeftWidth: '0.3em',
      },
    },
    size: {
      fontSize: '2.5em'
    }
  }));

export default function Title({title}){
    const classes = useStyles();
    return (
        <div className={classes.title}>
          <Fade left>
            <h1>
                <span className={classes.titleBorder}>{title}</span>
            </h1>
          </Fade>
        </div>
    )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
