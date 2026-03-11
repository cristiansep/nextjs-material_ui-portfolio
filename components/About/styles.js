import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  cardGrid: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  marginImg: {
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      marginRight:0,
      marginBottom: 30,
      width: '100%',
    },
    [theme.breakpoints.down("sm")]: {
      marginRight:0,
      marginBottom: 30,
      width: '100%',
    }
  },
  top: {},
  imagen: {
    marginTop: "6px",
    width: "20rem",
    height: "20rem",
    borderRadius: "12px",
    border: '1px solid rgba(57, 200, 250, 0.15)',
    transition: 'all 0.4s ease',
  },
  imagenMobile: {
    marginTop: "6px",
    width: "100%",
    maxWidth: "18rem",
    height: "auto",
    borderRadius: "12px",
    border: '1px solid rgba(57, 200, 250, 0.15)',
  },
  cardroot: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  primero: {
    marginRight: '10px',
    color: '#39c8fa',
    fontFamily: 'Outfit, sans-serif',
    letterSpacing: '1px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '0.85rem',
    },
  },
  segundo: {
    color: 'rgba(255, 255, 255, 0.65)',
    fontFamily: 'Outfit, sans-serif',
    letterSpacing: '0.5px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '0.85rem',
    },
  },
  about_text: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.65)',
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 400,
    textAlign: 'justify',
    lineHeight: 1.8,
    [theme.breakpoints.down("sm")]: {
      fontSize: '14px',
      lineHeight: 1.7,
    },
  },
  paperStyle: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '20px',
  },
  paperStyleMobile: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
  },
  boxData: {
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
  buttonColor: {
    marginTop: "20px",
    color: '#ffffff',
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 600,
    letterSpacing: '2px',
    fontSize: '0.85rem',
    padding: '10px 32px',
    background: 'linear-gradient(135deg, #39c8fa 0%, #a78bfa 100%)',
    borderRadius: '10px',
    border: 'none',
    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    "&:hover,&.MuiButton-hover":{
      background: 'linear-gradient(135deg, #a78bfa 0%, #39c8fa 100%)',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 30px rgba(57, 200, 250, 0.25)',
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      padding: '12px 24px',
    }
  }
}));
