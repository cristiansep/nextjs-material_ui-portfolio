import { makeStyles } from '@material-ui/core/styles';

const mono = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.65rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
};

export default makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(14),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
      },
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: theme.spacing(12),
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: '1fr',
        gap: theme.spacing(8),
      },
    },
    pitch: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
      lineHeight: 1.15,
      color: 'var(--ink)',
      margin: 0,
      '& em': {
        color: 'var(--signal)',
      },
    },
    email: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      marginTop: theme.spacing(5),
      fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
      color: 'var(--flare)',
      textDecoration: 'none',
      paddingBottom: 6,
      borderBottom: '1px solid rgba(255, 122, 69, 0.4)',
      wordBreak: 'break-all',
      transition: 'border-color 0.3s ease',
      '& span': {
        transition: 'transform 0.4s var(--ease-out)',
      },
      '&:hover': {
        borderColor: 'var(--flare)',
      },
      '&:hover span': {
        transform: 'translateX(4px)',
      },
    },
    details: {
      display: 'flex',
      gap: theme.spacing(6),
      margin: 0,
      marginTop: theme.spacing(6),
      '& dt': {
        ...mono,
        color: 'var(--ink-mute)',
        marginBottom: 8,
      },
      '& dd': {
        margin: 0,
        color: 'var(--ink-soft)',
      },
      '& a': {
        textDecoration: 'none',
        '&:hover': { color: 'var(--signal)' },
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(4),
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      '& span': {
        ...mono,
        color: 'var(--ink-mute)',
        transition: 'color 0.3s ease',
      },
      '&:focus-within span': {
        color: 'var(--signal)',
      },
      '& input, & textarea': {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--line-strong)',
        borderRadius: 0,
        padding: '10px 0',
        color: 'var(--ink)',
        fontFamily: 'var(--font-body)',
        fontSize: '1.05rem',
        resize: 'vertical',
        transition: 'border-color 0.3s ease',
        '&:focus': {
          outline: 'none',
          borderColor: 'var(--signal)',
        },
      },
    },
    submit: {
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      marginTop: theme.spacing(1),
      padding: '16px 28px',
      border: 'none',
      borderRadius: 100,
      background: 'var(--flare)',
      color: 'var(--bg)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 40px rgba(255, 122, 69, 0.35)',
      },
      [theme.breakpoints.down("xs")]: {
        alignSelf: 'stretch',
        justifyContent: 'center',
      },
    },
}));
