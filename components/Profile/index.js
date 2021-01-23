import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid } from '@material-ui/core';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

import AnimatedImage from '../AnimatedImage';
import { Particulas } from '../Particulas';
// import AnimatedImage from '../components/AnimatedImage';




const useStyles = makeStyles((theme) => ({
  backColor: {
    background: "#252740",
  },
  cardGrid: {
    height: "100vh",
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },

  nameTitle: {
    color: "#fff",
    fontFamily: "Arial Black",
    marginTop: "40%",
    [theme.breakpoints.up("xl")]: {
      top: "50%",
    },
    [theme.breakpoints.up("md")]: {
      top: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "50%",
    },
  },
  nameSubTitle: {
    color: "#ff4c60",
    fontFamily: "Arial Black",
  },
  image: {
    height: 400,
    width: 400,
    position: 'relative',
    [theme.breakpoints.down("sm")]: {
      // height: 400,
      // width: 400,
      display: "none",
    },
    [theme.breakpoints.up("xl")]: {
      height: 700,
      width: 700,
      top: "30%",
      position: 'absolute',
    },
    [theme.breakpoints.up("md")]: {
      height: 500,
      width: 500,
      position: 'relative',
    },
  },
  images: {
    height: 400,
    width: 400,
    position: 'relative',
  },
  textCenter: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1,
    },
  },
}));

export default function Perfil() {
  const classes = useStyles();


  return (
    <div className={classes.backColor}>
         <Particulas/>
      <Container className={classes.cardGrid} maxWidth="lg" id="inicio">

        <Grid container spacing={2} justify="center">
      
    
          <Grid item xs={12} sm={6} md={6} lg={6}  xl={6}  className={classes.textCenter}>
                <Typography
                  variant="h3"
                  gutterBottom
                  className={classes.nameTitle}
                >
              <Fade left>
           
                  <Typed strings={["Cristian Sepúlveda"]} typeSpeed={50} />
             
                </Fade>
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.nameSubTitle}
                  >
                    <Fade left>
                  <Typed
                    strings={["Full Stack Developer", "Front-end Developer", "Back-end Developer"]}
                    typeSpeed={50}
                    backSpeed={70}
                    loop
                    />
                    </Fade>
                </Typography>
              </Grid>
        
          
          <Grid item xs={12} sm={6} md={6} lg={6}  xl={6}>
          <Fade right>
          <div className={classes.image}>
          <AnimatedImage />
          </div>
          </Fade>
          </Grid>
        </Grid>
      </Container>
    
    </div>
  );
}