import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  backColor: {
    // background: "#0a0a23",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: 'block'
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "35px",
    textAlign: "center",
  },
  text: {
    marginTop: "65px",
    margin: "1rem",
    textAlign: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  img: {
    width: "100%",
    height: "300px",
    marginTop: "65px",
  },
  colorAppbar: {
    backgroundColor: "#0a0a23",
  },
  socialContent: {
    background: "transparent",
    WebkitTransform: 'perspective(1px) translateZ(0)',
    transform: 'perspective(1px) translateZ(0)',
    WebkitTransitionDuration: '0.3s',
    transitionDuration: '0.3s',
    WebkitTransitionProperty: 'transform',
    transitionProperty: 'transform'
  },
  social: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover, &:focus, &:active": {
        fill: "#39c8fa",
        WebkitTransform: 'scale(1.1)',
        transform: 'scale(1.1)'
      },
    },
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      color: "transparent",
      textShadow: "0 0 0 #ffff",
    },
  },
}));
