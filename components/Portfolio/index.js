import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';

import Title from '../widgets/Title';
import {portfolioData} from '../../data'

import useStyles from './styles';


function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={10} md={6} xl={6} className={classes.projectCard}>
      <Fade bottom cascade>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={props.img}
            title={props.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography component="h5" variant="h6" className={classes.title}>
              {props.title}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.date}>
              {props.date}
            </Typography>
            <Typography variant="body2" className={classes.text}>
              <span className={classes.explanation}>Tecnología:</span> {props.technology}
            </Typography>
            <Typography variant="body2" className={classes.text}>
              <span className={classes.explanation}>Características:</span> {props.features}
            </Typography>

            <div className={classes.buttonsContainer}>
              {props.codeUrl ? (
                <a href={props.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outlined" className={classes.buttonOutlined} size='small'>
                    VER CODIGO
                  </Button>
                </a>
              ) : null}
              {props.demoUrl ? (
                <a href={props.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outlined" className={classes.buttonOutlined} size='small'>
                    DEMO
                  </Button>
                </a>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </Fade>
    </Grid>
  );
}

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.backColor}>
      <Container className={classes.cardGrid} maxWidth="lg" id="portfolio">
        <Title title="Proyectos"/>

        <Grid container justifyContent="center" spacing={3}>
          {portfolioData.map(item => (
            <ProjectCard
              key={item.id}
              title={item.title}
              technology={item.technology}
              features={item.features}
              date={item.date}
              img={item.img}
              codeUrl={item.codeUrl}
              demoUrl={item.demoUrl}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
