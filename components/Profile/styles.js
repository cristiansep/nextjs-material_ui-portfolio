import { makeStyles } from '@material-ui/core/styles';




export default makeStyles((theme) => ({
    backColor: {
      position: 'relative',
    },
    cardGrid: {
      height: "100vh",
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(14),
    },
  
    nameTitle: {
      fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: "#fff",
      marginTop: '30%',
      [theme.breakpoints.up("xl")]: {
        marginTop: '50%',
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: '2.5em',
      },
    },
    nameSubTitle: {
      fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif',
      fontWeight: 500,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: '#39c8fa',
      [theme.breakpoints.down("sm")]: {
        fontSize: '1.5em',
      },
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