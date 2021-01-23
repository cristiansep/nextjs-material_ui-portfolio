import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacingAppbar: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 0.7,
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
        flexGrow: 1,
        marginLeft: 0,
    },
  },
  buttonTitle: {
    fontSize: '20px',
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      color: "transparent",
      textShadow: "0 0 0 #ffff",
    },
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      opacity: 1,
      backgroundColor: "transparent"
    
    },
  },
  buttonSpacing: {
    flexGrow: 0.5,
    "& > *": {
      marginLeft: theme.spacing(4),
    },
  },
  MenuBackground: {
    backgroundColor: "#080a20",
  },
  appBarTransparent: {
    backgroundColor: "rgba(67, 129, 168, 0)",
    boxShadow: "none",

    transitionTimingFunction: "ease-in",
    transition: "all 0.5s",
  },
  appBarSolid: {
    backgroundColor: "#080a20",

    transitionTimingFunction: "ease-in",
    transition: "all 0.5s",
  },
  buttonBorder: {
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      color: "transparent",
      textShadow: "0 0 0 #ffff",
    },
  },
  buttonBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    position: "relative",
    background: "transparent",
    flexGrow: 0.5,
    "& > *": {
      marginLeft: theme.spacing(4),
    },
    WebkitTransform: 'perspective(1px) translateZ(0)',
    transform: 'perspective(1px) translateZ(0)',
    WebkitTransitionDuration: '0.3s',
    transitionDuration: '0.3s',
    WebkitTransitionProperty: 'transform',
    transitionProperty: 'transform'
  },
  buttonBorder2: {
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      color: "transparent",
      textShadow: "0 0 0 #ffff",
    },
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      opacity: 1,
      backgroundColor: "transparent",
      WebkitTransform: 'scale(1.1)',
      transform: 'scale(1.1)'
    },
  },
  iconButtonBorder: {
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      textShadow: "0 0 0 #ffff",
    },
  },
  buttonCollapse: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    boxShadow: "none",
  },
  active: {
    borderBottom: "2px solid #ff324d",
  },
}));
