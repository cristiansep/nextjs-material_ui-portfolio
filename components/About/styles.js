import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: '#F9EBEA',
  },
  cardGrid: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },
  paper: {
    // padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  marginImg: {
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      marginRight:0,
      marginBottom: 25
    }
  },
  top: {
    // marginTop: "50px",
  },
  imagen: {
    // border: "5px solid #F9EBEA",
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
    // margin: '0 2px',
    // transform: 'scale(0.8)',
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
    // fontSize: '15px',
    // fontFamily: "Arial Black",
    // color: '#252740',
    color: '#7c7d8c',
  
  },
  about_text: {
    marginTop: "20px",
    fontSize: '17px',
    // fontFamily: "Arial Black",
    color: '#7c7d8c',
    fontWeight:600,
    textAlign: 'justify'
  },
  paperStyle: {
    // backgroundColor: '#F9EBEA',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
   
  },
  boxData: {
    marginBottom: 15,
  }
}));