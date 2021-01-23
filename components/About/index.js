import React from 'react';
import Title from '../../components/Title';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {useSpring, animated} from 'react-spring'


import { Skills } from '../Skills';


import useStyles from './styles';









const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`




export const About = () => {
  const classes = useStyles();
  

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
 
  return (
    <div className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="lg" id="about">
        <Title title="Sobre mi" />

        
        <Paper className={classes.paperStyle}>
        <Grid container spacing={2} justify="center" id="skill">
          {/*Section 1*/}
          <Fade bottom>
            <animated.div
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            >
              <Grid item xs={12} sm={6} md={6} className={classes.marginImg}>
                <img
                  src="/images/me.jpg"
                  alt="Foto Perfil"
                  className={classes.imagen}
                />
              </Grid>
            </animated.div>
          </Fade>


          <Grid item xs={12} sm={8} md={6} xl={6}>

           
              <Fade bottom>
              <Grid container direction="column" className={classes.top}>
                <Grid container item direction="row"  className={classes.boxData}>
                  <Grid item >
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className={classes.primero}
                  >
                    Nombre:
                  </Typography>
                  </Grid>
                  <Grid item >
                  <Typography
                    variant="subtitle1" 
                    component="span"
                    className={classes.segundo}
                  >
                    Cristian Sepúlveda
                  </Typography>
                  </Grid>
                </Grid>

                <Grid container item direction="row" className={classes.boxData}>
                  <Grid item>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className={classes.primero}
                  >
                    Perfil:
                  </Typography>
                  </Grid>
                  <Grid item>
                  <Typography
                    variant="subtitle1" 
                    component="span"
                    className={classes.segundo}
                  >
                    Full Stack Developer
                  </Typography>
                  </Grid>
                </Grid>
             
                <Grid container item direction="row" className={classes.boxData}>
                  <Grid item>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className={classes.primero}
                  >
                    Email:
                  </Typography>
                  </Grid>
                  <Grid item>
                  <Typography
                    variant="subtitle1" 
                    component="span"
                    className={classes.segundo}
                  >
                    cristiansepulvedamendez@gmail.com
                  </Typography>
                  </Grid>
                </Grid>

                <Grid container item direction="row" className={classes.boxData}>
                  <Grid item>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className={classes.primero}
                  >
                    Telefono:
                  </Typography>
                  </Grid>
                  <Grid item>
                  <Typography
                    variant="subtitle1" 
                    component="span"
                    className={classes.segundo}
                  >
                    + 56 9 4550 4578
                  </Typography>
                  </Grid>
                </Grid>
             
              
              </Grid>
                </Fade>

                <Fade bottom>
              <Typography
                variant="h5"
                gutterBottom
                color="textSecondary"
                className={classes.about_text}
                // style={{ color: "#252740" }}
              >
                Soy técnico en programación computacional 
                y en estos momentos me encuentro cursando la carrera de ingeniería en informática 
                en instituto profesional AIEP Osorno.
                Me apasiona programar y crear aplicaciones funcionales e interactivas. 
                Soy un entusiasta de las nuevas tecnologías, 
                gran parte de mi tiempo la dedico a la investigación y desarrollo de estas.
              </Typography>
              </Fade>
         
          </Grid>


        </Grid>
          <Skills/>
        </Paper>
      </Container>
    </div>
  );
};
