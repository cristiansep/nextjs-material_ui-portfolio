import React from 'react';
import Title from '../widgets/Title';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {useSpring, animated} from 'react-spring'
import Button from '@material-ui/core/Button';
import {aboutData} from '../../data';



import { Skills } from '../widgets/Skills';


import useStyles from './styles';
import { useMediaQuery, useTheme } from '@material-ui/core';









const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`




export const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="lg" id="about">
        <Title title="Sobre mi" />

        <Paper className={ isMobile ? classes.paperStyleMobile : classes.paperStyle}>
          {aboutData.map((about) => (
            <Grid
              container
              spacing={2}
              justify="center"
              id="skill"
              key={about.id}
            >
              {/*Section 1*/}
              <Fade bottom>
                {
                  isMobile ? (

                    <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    className={classes.marginImg}
                  >
                    <img
                      src={about.img}
                      alt="Foto Perfil"
                      className={classes.imagen}
                    />
                  </Grid>

                  ) : (

                    <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) =>
                      set({ xys: calc(x, y) })
                    }
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys?.interpolate(trans) }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      className={classes.marginImg}
                    >
                      <img
                        src={about.img}
                        alt="Foto Perfil"
                        className={classes.imagen}
                      />
                    </Grid>
                  </animated.div>

                  )
                }
              </Fade>

              <Grid item xs={12} sm={8} md={6} xl={6}>
                <Fade bottom>
                  <Grid container direction="column" className={classes.top}>
                    <Grid
                      container
                      item
                      direction="row"
                      className={classes.boxData}
                    >
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          className={classes.primero}
                        >
                          Nombre:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          className={classes.segundo}
                        >
                          {about.name}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      direction="row"
                      className={classes.boxData}
                    >
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
                          {about.perfil}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      direction="row"
                      className={classes.boxData}
                    >
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
                          {about.email}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      direction="row"
                      className={classes.boxData}
                    >
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          className={classes.primero}
                        >
                          Teléfono:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          className={classes.segundo}
                        >
                          {about.phone}
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
                  >
                    {about.summary}
                  </Typography>
                </Fade>
                <Fade bottom>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      href={about.resume}
                      target="_blank"
                      className={classes.buttonColor}
                    >
                      Descargar Cv
                    </Button>
                  </Grid>
                </Fade>
              </Grid>
            </Grid>
          ))}

          <Skills />
        </Paper>
      </Container>
    </div>
  );
};
