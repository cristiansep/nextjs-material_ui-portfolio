import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  
  divContainer: {
    background: '#ffffff',
  },
  root: {
    display: 'flex',
    borderRadius: 10,
    "&:boder, &.MuiCard-root":{
      borderColor: 'black'
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },
  title:{
    fontSize:'2em',
    fontWeight: 600,
    opacity:'0.95',
   color:"#e3324d",
  },
  cover: {
    width: 170,
    backgroundSize: '120px 120px'
  },
  projectCard:{
    margin:'15px auto',
    WebkitTransform: 'perspective(1px) translateZ(0)',
    transform: 'perspective(1px) translateZ(0)',
    WebkitTransitionDuration: '0.3s',
    transitionDuration: '0.3s',
    WebkitTransitionProperty: 'transform',
    transitionProperty: 'transform',
    WebkitTransitionTimingFunction: 'ease-out',
    transitionTimingFunction: 'ease-out',
    "&:hover": {
      WebkitTransform: 'translateY(-8px)',
      transform: 'translateY(-8px)'
    },
  },
  explanation:{
    fontWeight:600
  },
  buttoms:{
    marginTop:10
  }
}));
