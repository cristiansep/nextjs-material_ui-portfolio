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
        <Fade bottom>
        <Card className={classes.root}>
          <CardMedia
          style={{marginLeft:'16px' }}
            className={classes.cover}
            image={props.img}
          />
          <div className={classes.details}>
            <CardContent>
              <Typography component="h5" variant="h5" className={classes.title}>
                {props.title}
              </Typography>
              <Typography 
                variant="caption" 
                display="block" 
                gutterBottom 
                style={{
                  fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif',
                  letterSpacing: '0.5px',
                  color: '#c7c9d1',
                  fontSize: '0.8em',
                }}
              >
                {props.date}
              </Typography>
              <Typography variant="subtitle1" className={classes.text}>
               <span className={classes.explanation}>Tecnología:</span> {props.technology}
              </Typography>
              <Typography variant="subtitle1" className={classes.text}>
              <span  className={classes.explanation}>Características:</span> {props.features}
              </Typography>


              <div className={classes.buttoms}>
              <a href={props.demoUrl} target="_blank" rel="noopener noreferrer">
                {props.demoUrl? 
                  <Button variant="outlined" style={{float:'right',margin:10,  color: '#39c8fa', fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif'}} size='small'>
                    DEMO
                  </Button>
                  : null
                }
              </a>
                <a href={props.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outlined"  style={{float:'right',margin:10, color: '#39c8fa', fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif'}} size='small'>
                    VER CODIGO 
                  </Button>
                </a>
              </div>


            </CardContent>
          </div>
        </Card>
        </Fade>
      </Grid>
    );
  }
  
export default function Portfolio() {
  const classes = useStyles();

  return (
    <div >
    <Container className={classes.cardGrid} maxWidth="lg" id="portfolio">
     
        <Title title="Proyectos"/>
    
      <Grid container justify="center" spacing={10}>
        {portfolioData.map(item => <ProjectCard
          key={item.id} 
          title={item.title}
          technology={item.technology}
          features={item.features}
          date={item.date}
          img={item.img}
          codeUrl={item.codeUrl}
          demoUrl={item.demoUrl}
        />)}
      </Grid>
    </Container>
    </div>
  );
}