import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';
import Typography from '@material-ui/core/Typography';


import { ProgressBar } from './ProgressBar';



const useStyles =  makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  marginContent: {
    marginLeft: "7%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "4%",
  
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
  
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft:0,
      marginBottom: 25
    }
  },
  top: {
    marginTop: "50px",
  },
  imagen: {
    border: "15px solid #F9EBEA",
    width: "20rem",
    height: "20rem",
    borderRadius: "5px"
  },
  margenTitulo: {
    marginBottom: 30,
  }
}));




  const numsData = [
    {name: 'Node', num:50},
    {name: 'React', num:70},
    {name: 'Angular', num:40},
    {name: 'Javascript', num:80}
  ];







export const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="lg">
          <Fade bottom>
        <Grid container >
            <Grid item xs={12} sm={9} md={12} xl={12} className={classes.marginContent}>
            <Typography variant="h5" gutterBottom className={classes.margenTitulo}>
              Habilidades
            </Typography>
              {numsData.map((items, idx) => (
                <ProgressBar key={idx} name={items.name} done={items.num} />
              ))}
            </Grid>
        </Grid>
          </Fade>
      </Container>
    </div>
  );
};
