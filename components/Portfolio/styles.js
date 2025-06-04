import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  
  divContainer: {
    background: '#ffffff',
  },
  root: {
    background: "#44444a",
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
    fontWeight: 600,
    opacity:'0.95',
    color:"#39c8fa",
    // fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
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
    fontWeight:700
    
  },
  buttoms:{
    marginTop:10,
  },
  text: {
    color: '#c7c9d1',
    fontSize: '1em',
    letterSpacing: '0.5px',
    // fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif',
  }
}));
