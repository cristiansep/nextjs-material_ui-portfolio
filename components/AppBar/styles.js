import { makeStyles } from "@material-ui/core/styles";

const mono = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.66rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
};

export default makeStyles((theme) => ({
  toolbar: {
    gap: theme.spacing(4),
    minHeight: 72,
  },
  appBarTransparent: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid transparent",
    transition: "all 0.5s ease",
  },
  appBarSolid: {
    backgroundColor: "rgba(5, 6, 13, 0.8)",
    backdropFilter: "blur(16px) saturate(160%)",
    boxShadow: "none",
    borderBottom: "1px solid var(--line)",
    transition: "all 0.5s ease",
  },
  logo: {
    marginRight: 'auto',
    padding: 0,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-display)',
    fontSize: '1.6rem',
    color: 'var(--ink)',
    '& em': {
      color: 'var(--signal)',
    },
  },
  nav: {
    display: 'flex',
    gap: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navLink: {
    ...mono,
    position: 'relative',
    color: 'var(--ink-soft)',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '6px 0',
    transition: 'color 0.3s ease',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 1,
      width: '100%',
      background: 'var(--flare)',
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: 'transform 0.4s var(--ease-out)',
    },
    '&:hover': {
      color: 'var(--ink)',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
  },
  navIndex: {
    color: 'var(--flare)',
    marginRight: 8,
  },
  active: {
    color: 'var(--ink) !important',
    '&::after': {
      transform: 'scaleX(1) !important',
    },
  },
  buttonCollapse: {
    order: 2,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuButton: {
    color: 'var(--ink)',
  },
  menuPaper: {
    background: 'var(--bg-raised)',
    border: '1px solid var(--line)',
    borderRadius: 4,
  },
  menuItem: {
    ...mono,
    color: 'var(--ink)',
    padding: theme.spacing(1.5, 3),
  },
}));
