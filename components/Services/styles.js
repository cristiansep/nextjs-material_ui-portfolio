import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    backColor: {
        backgroundColor: '#F9EBEA',

     },
     cardGrid: {
       paddingTop: theme.spacing(14),
       paddingBottom: theme.spacing(14),
     },
     projectCard:{
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
     card: {
      borderRadius: 10,
      width: "100%",
      "&:boder, &.MuiCard-root":{
        borderColor: 'black'
      },
     
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    cardActionArea:{
      padding:5
    },
    media: {
      height: 250,
      objectFit: 'cover',
      backgroundSize: '250px 250px'//TODO: resize image bg
    },
    title:{
      fontSize:'2em',
      fontWeight: 600,
      opacity:'0.95',
      textAlign:'center',
      color:"#e3324d",
    },
    description:{
      fontSize:'1.2em',
    }
     
}));
