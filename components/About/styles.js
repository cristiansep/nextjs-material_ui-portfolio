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
  top: {
    // marginTop: "50px",
  },
  imagen: {
    marginTop: "6px",
    width: "20rem",
    height: "20rem",
    borderRadius: "5px"
  },
  imagenMobile: {
    marginTop: "6px",
    width: "100%",
    maxWidth: "18rem",
    height: "auto", 
    borderRadius: "5px"
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
    textShadow: '0 0 8px rgba(57, 200, 250, 0.4)',
    letterSpacing: '1px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '0.85rem',
    },
  },
  segundo: {
    color: '#c7c9d1',
    letterSpacing: '0.5px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '0.85rem',
    },
  },
  about_text: {
    fontSize: '17px',
    color: '#c7c9d1',
    fontWeight: 600,
    textAlign: 'justify',
    lineHeight: 1.7,
    [theme.breakpoints.down("sm")]: {
      fontSize: '14px',
      lineHeight: 1.6,
    },
  },
  paperStyle: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    background: "#44444a",
   
  },
  paperStyleMobile: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    background: "#44444a",
  },
  boxData: {
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
  buttonColor: {
    marginTop: "15px",
    color: '#ffffff',
    background: 'linear-gradient(90deg, #39c8fa 0%, #7b68ee 100%)',
    boxShadow: '0 0 15px rgba(57, 200, 250, 0.4)',
    letterSpacing: '1px',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    "&:hover,&.MuiButton-hover":{
      background: 'linear-gradient(90deg, #7b68ee 0%, #39c8fa 100%)',
      boxShadow: '0 0 25px rgba(57, 200, 250, 0.6)',
      transform: 'translateY(-2px)',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    }
  }
}));