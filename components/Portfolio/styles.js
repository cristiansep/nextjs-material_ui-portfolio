import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
      display: 'flex',
      [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
      },
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
    cover: {
      width: 170,
      minHeight: 170,
      backgroundSize: '120px 120px',
      opacity: 0.85,
      flexShrink: 0,
      marginLeft: 16,
      [theme.breakpoints.down("sm")]: {
        width: '100%',
        minHeight: 180,
        marginLeft: 0,
        backgroundSize: '150px 150px',
      },
    },
    cardContent: {
      flex: 1,
      padding: theme.spacing(2.5),
    },
    title:{
      fontSize: '1.1em',
      fontWeight: 700,
      color: '#39c8fa',
      fontFamily: 'Syne, sans-serif',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      [theme.breakpoints.down("sm")]: {
        fontSize: '0.95em',
        letterSpacing: '1px',
      },
    },
    date: {
      fontFamily: 'Outfit, sans-serif',
      letterSpacing: '1px',
      color: 'rgba(255, 255, 255, 0.4)',
      fontSize: '0.75em',
      textTransform: 'uppercase',
    },
    text: {
      fontSize: '0.85em',
      color: 'rgba(255, 255, 255, 0.55)',
      fontFamily: 'Outfit, sans-serif',
      letterSpacing: '0.3px',
      lineHeight: 1.6,
      [theme.breakpoints.down("sm")]: {
        fontSize: '0.8em',
      },
    },
    explanation:{
      fontWeight: 600,
      color: '#39c8fa',
    },
    buttonsContainer:{
      marginTop: theme.spacing(1.5),
      display: 'flex',
      justifyContent: 'flex-end',
      gap: theme.spacing(1),
    },
    buttonOutlined: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 500,
      letterSpacing: '1px',
      fontSize: '0.7rem',
      borderColor: 'rgba(255, 255, 255, 0.15)',
      borderRadius: 8,
      transition: 'all 0.3s ease',
      "&:hover": {
        borderColor: '#39c8fa',
        color: '#39c8fa',
        background: 'rgba(57, 200, 250, 0.05)',
      },
    },
}));
