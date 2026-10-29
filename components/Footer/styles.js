import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    borderTop: '1px solid var(--line)',
    background: 'rgba(5, 6, 13, 0.92)',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(3),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start',
    },
  },
  social: {
    display: 'flex',
    gap: theme.spacing(3),
    '& a': {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.65rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: 'var(--flare)',
      },
    },
  },
}));
