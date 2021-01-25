import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Fade from 'react-reveal/Fade';


import Title from '../widgets/Title';
import useStyles from './styles';

import {servicesData} from '../../data'




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
          {servicesData.map((item) => (
    
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
