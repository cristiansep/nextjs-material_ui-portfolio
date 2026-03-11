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
      fontFamily: 'Syne, sans-serif',
      fontWeight: 800,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: "#fff",
      lineHeight: 1.1,
      marginTop: '30%',
      [theme.breakpoints.up("xl")]: {
        marginTop: '50%',
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: '2.2em',
        letterSpacing: '2px',
      },
    },
    nameSubTitle: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 400,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#39c8fa',
      opacity: 0.9,
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        fontSize: '1.2em',
        letterSpacing: '2px',
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
