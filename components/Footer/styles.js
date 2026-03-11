import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backColor: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: 20,
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
    display: 'block',
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
    backgroundColor: "#060614",
  },
  socialContent: {
    background: "transparent",
    transition: 'all 0.3s ease',
  },
  social: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "rgba(255, 255, 255, 0.5)",
      transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      "&:hover, &:focus, &:active": {
        fill: "#39c8fa",
        transform: 'translateY(-3px)',
      },
    },
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      color: "transparent",
      textShadow: "0 0 0 #ffff",
    },
  },
}));
