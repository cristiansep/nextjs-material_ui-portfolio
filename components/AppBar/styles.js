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
    flexGrow: 1,
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
        flexGrow: 1,
        marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonTitle: {
    fontSize: '18px',
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      color: "transparent",
      textShadow: "0 0 0 #ffff",
    },
    "&:hover, &.Mui-focusVisible": {
      transition: "0.4s",
      opacity: 1,
      backgroundColor: "transparent",
      letterSpacing: '5px',
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
    borderBottom: "1px solid transparent",
    transitionTimingFunction: "ease-in",
    transition: "all 0.5s",
  },
  appBarSolid: {
    backgroundColor: "rgba(6, 6, 20, 0.85)",
    backdropFilter: "blur(20px) saturate(180%)",
    borderBottom: "1px solid rgba(57, 200, 250, 0.08)",
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
    "& > *": {
      marginLeft: theme.spacing(3),
    },
  },
  buttonBorder2: {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 500,
    letterSpacing: '1.5px',
    fontSize: '0.8rem',
    position: 'relative',
    padding: '8px 16px',
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      color: "transparent",
      textShadow: "0 0 0 #ffff",
    },
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      opacity: 1,
      backgroundColor: "transparent",
      color: '#39c8fa',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 4,
      left: '50%',
      width: 0,
      height: '1px',
      background: 'linear-gradient(90deg, #39c8fa, #a78bfa)',
      transition: 'all 0.3s ease',
      transform: 'translateX(-50%)',
    },
    '&:hover::after': {
      width: '60%',
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
    color: '#39c8fa !important',
    '&::after': {
      width: '60% !important',
    },
  },
  buttonSong: {
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  }
}));
