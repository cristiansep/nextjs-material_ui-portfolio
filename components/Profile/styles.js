import { makeStyles } from '@material-ui/core/styles';




export default makeStyles((theme) => ({
    backColor: {
      // background: "#252740",
      background: "#0a0a23"
    },
    cardGrid: {
      height: "100vh",
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(14),
    },
  
    nameTitle: {
      color: "#fff",
      fontFamily: "Arial Black",
      marginTop: "30%",
      [theme.breakpoints.up("xl")]: {
        marginTop: "50%",
      },
    },
    nameSubTitle: {
      color: "#39c8fa",
      fontFamily: "Arial Black",
    },
    image: {
      height: 400,
      width: 400,
      position: 'relative',
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.up("xl")]: {
        height: 700,
        width: 700,
        top: "30%",
        position: 'absolute',
      },
      [theme.breakpoints.up("md")]: {
        height: 500,
        width: 500,
        position: 'relative',
      },
    },
    images: {
      height: 400,
      width: 400,
      position: 'relative',
    },
    textCenter: {
      [theme.breakpoints.down("sm")]: {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
      },
    },
  }));