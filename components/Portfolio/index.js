import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';



import Title from '../Title';
import useStyles from './styles';



  const projects= [
    {
      id:1,
      title:"Landing page",
      technology:"React.js, Material UI, Bootstrap.",
      features:"Responsive web design, Serverless contact form, Google Analytics Setup.",
      date:"November 2019",
      img:"/images/undraw_react_y7wq.svg",
      codeUrl:"https://github.com/HamdiNawfel/anis-construction",
      demoUrl:"https://quizzical-allen-8a2dcc.netlify.app"
    },
    {
      id:2,
      title:"Startup feeds",
      technology:"Express.js, Firebase, React.js, Redux, Material UI.",
      features:"login, Signup, push notification.",
      date:"May 2020",
      img:"/images/undraw_finance_0bdk.svg",
      codeUrl:"https://github.com/HamdiNawfel/startup-feeds",
      demoUrl:"https://socialapp-26260.firebaseapp.com/"
    },
    {
      id:3,
      title:"Rest Api",
      technology:"Node.js, Express.js, Passport-jwt.",
      features:"Authentification, CRUD operations, Uploading File.",
      date:"April 2020",
      img:"/images/undraw_code_review_l1q9.svg",
      codeUrl:"https://github.com/HamdiNawfel/auth-api",
      
    },
    {
      id:4,
      title:"Portfolio",
      technology:"React, Material UI, React-spring.",
      features:"Animation, Responsive web design, Serverless contact form.",
      date:"July  2020",
      img:"/images/undraw_portfolio_website_lidw.svg",
      codeUrl:"https://github.com/HamdiNawfel/nawfel-hamdi.com.git",
      demoUrl:""
    },
  ]



function ProjectCard(props) {
    const classes = useStyles();
    return (
      <Grid item xs={12} sm={10} md={6} xl={6} className={classes.projectCard}>
        <Fade bottom>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={props.img}
          />
          <div className={classes.details}>
            <CardContent>
              <Typography component="h5" variant="h5" className={classes.title}>
                {props.title}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom color="textSecondary">
                {props.date}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
               <span className={classes.explanation}>Technology:</span> {props.technology}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              <span  className={classes.explanation}>Features:</span> {props.features}
              </Typography>


              <div className={classes.buttoms}>
                <a href={props.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outlined"  style={{float:'right',margin:10, color: '#252740'}}size='small'>
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
        {projects.map(item => <ProjectCard
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