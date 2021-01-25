import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Grid } from '@material-ui/core';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

import AnimatedImage from '../widgets/AnimatedImage';
import { Particulas } from '../widgets/Particulas';

import useStyles from './styles';




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
              <Fade>
           
                  <Typed strings={["Cristian Sepúlveda"]} typeSpeed={50} />
             
                </Fade>
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.nameSubTitle}
                  >
                    <Fade>
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
          <Fade>
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