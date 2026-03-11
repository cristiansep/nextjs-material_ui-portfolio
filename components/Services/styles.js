import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    backColor: {},
     cardGrid: {
       paddingTop: theme.spacing(14),
       paddingBottom: theme.spacing(14),
     },
     projectCard:{
       transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      "&:hover": {
        transform: 'translateY(-12px)',
      },
    },
     card: {
      borderRadius: 20,
      width: "100%",
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      "&:hover": {
        border: '1px solid rgba(57, 200, 250, 0.15)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
    },
    cardMedia: {
      paddingTop: '56.25%'
    },
    cardContent: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    cardActionArea:{
      padding:5
    },
    media: {
      height: 220,
      objectFit: 'cover',
      backgroundSize: '200px 200px',
      opacity: 0.85,
      transition: 'opacity 0.3s ease',
      "$card:hover &": {
        opacity: 1,
      },
    },
    title:{
      fontSize:'1.5em',
      fontWeight: 700,
      textAlign:'center',
      color:'#ffffff',
      fontFamily: 'Syne, sans-serif',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        fontSize: '1.2em',
        letterSpacing: '1px',
      },
    },
    description:{
      fontSize:'1em',
      color:'rgba(255, 255, 255, 0.55)',
      fontFamily: 'Outfit, sans-serif',
      letterSpacing: '0.3px',
      lineHeight: 1.7,
      textAlign: 'center',
      [theme.breakpoints.down("sm")]: {
        fontSize: '0.9em',
        lineHeight: 1.6,
      },
    }

}));
