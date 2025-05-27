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
    fontFamily: "Arial Black",
    color: '#39c8fa',
  },
  segundo: {
    color: '#c7c9d1',
  
  },
  about_text: {
    marginTop: "20px",
    fontSize: '17px',
    color: '#c7c9d1',
    fontWeight:600,
    textAlign: 'justify'
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
  },
  buttonColor: {
    marginTop: "15px",
    color: '#23233a',
    background: '#39c8fa',
    "&:hover,&.MuiButton-hover":{
      background: '#39c8fa',
      color: '#23233a',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    }
  }
}));