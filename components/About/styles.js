import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    color: '#ff4c60',
  },
  segundo: {
    color: '#7c7d8c',
  
  },
  about_text: {
    marginTop: "20px",
    fontSize: '17px',
    color: '#7c7d8c',
    fontWeight:600,
    textAlign: 'justify'
  },
  paperStyle: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
   
  },
  boxData: {
    marginBottom: 15,
  },
  buttonColor: {
    marginTop: "15px",
    color: 'white',
    background: '#ff4c60',
    "&:hover,&.MuiButton-hover":{
      background: '#DD3A4C',
      color: 'white',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    }
  }
}));