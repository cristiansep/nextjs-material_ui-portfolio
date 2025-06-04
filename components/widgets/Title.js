import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    title: {
      color: '#39c8fa',
      paddingBottom: theme.spacing(8),
      // fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif',
      fontWeight: 700,
    },
    titleBorder: {
      color: '#39c8fa',
      margin:10,
      padding:5,
      border : '0px solid #44444a',
      borderLeftWidth: '0.4em',
      // fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif',
      letterSpacing: '1.5px',
      fontWeight: 700,
      fontSize: '1.5em',
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
