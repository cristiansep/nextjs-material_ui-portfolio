import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
// import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
      color: '#000000',
      paddingBottom: theme.spacing(8),
    },
    titleBorder: {
      color: '#080a20',
      margin:10,
      padding:5,
      border : '0px solid #ff4c60',
      borderLeftWidth: '0.4em'
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
