import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



import Title from '../Title';
import useStyles from './styles';



const services = [
  {
      id:1,
      title:"Fast",
      description:"Fast load times and lag free interaction, my highest priority.",
      img:'/images/undraw_To_the_stars_qhyy.svg'
  },
  {
      id:2,
      title:"Responsive",
      description:"My layouts will work on every device and every screen size.",
      img:'/images/undraw_progressive_app_m9ms.svg'
  },
  
  {
      id:3,
      title:"Dynamic",
      description:"Websites don't have to be static, I love making pages come to life.",
      img:'/images/undraw_server_cluster_jwwq.svg'
  },
]


function ItemCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} md={4} xl={4} className={classes.projectCard}>
      <Fade bottom cascade >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={props.img}
            title="Contemplative Reptile"
            />
          
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {props.description}
            </Typography>
          </CardContent>
        </Card>
        </Fade>
    </Grid>
  );
}


export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.backColor}>
      <Container className={classes.cardGrid} maxWidth="lg" id="servicios">
        <Title title="Servisios" />


        <Grid container justify="center" spacing={3}>
          {services.map((item) => (
    
            <ItemCard
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            />
            ))}
        </Grid>
          
      </Container>
    </div>
  );
}
