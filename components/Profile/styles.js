import { makeStyles } from '@material-ui/core/styles';

const rise = {
  opacity: 0,
  animation: 'rise-in 0.9s var(--ease-out) forwards',
};

export default makeStyles((theme) => ({
    hero: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      // Velo para legibilidad sobre la esfera 3D
      background: 'linear-gradient(90deg, rgba(5,6,13,0.85) 0%, rgba(5,6,13,0.35) 45%, transparent 70%)',
      [theme.breakpoints.down("sm")]: {
        background: 'linear-gradient(180deg, rgba(5,6,13,0.55) 0%, rgba(5,6,13,0.8) 40%, rgba(5,6,13,0.8) 70%, rgba(5,6,13,0.5) 100%)',
      },
    },
    inner: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(5),
    },
    content: {
      maxWidth: 720,
      marginBottom: 'auto',
      marginTop: 'auto',
    },
    status: {
      ...rise,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      margin: 0,
      marginBottom: theme.spacing(4),
      padding: '6px 14px',
      border: '1px solid var(--line)',
      borderRadius: 100,
      fontFamily: 'var(--font-mono)',
      fontSize: '0.68rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      background: 'rgba(5,6,13,0.5)',
    },
    dot: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--flare)',
      boxShadow: '0 0 12px var(--flare)',
      animation: 'blink 2s ease-in-out infinite',
    },
    name: {
      ...rise,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(3.6rem, 10vw, 8.5rem)',
      lineHeight: 0.92,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: 0,
      '& em': {
        display: 'block',
        color: 'var(--signal)',
      },
    },
    pitch: {
      ...rise,
      maxWidth: 520,
      marginTop: theme.spacing(4),
      marginBottom: 0,
      fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
      lineHeight: 1.6,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      [theme.breakpoints.down("sm")]: {
        fontWeight: 400,
        color: 'var(--ink)',
      },
    },
    actions: {
      ...rise,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: theme.spacing(4),
      marginTop: theme.spacing(5),
    },
    primary: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 28px',
      background: 'var(--flare)',
      color: 'var(--bg)',
      fontWeight: 600,
      fontSize: '0.95rem',
      textDecoration: 'none',
      cursor: 'pointer',
      borderRadius: 100,
      transition: 'transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out)',
      '& span': {
        transition: 'transform 0.4s var(--ease-out)',
      },
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 40px rgba(255, 122, 69, 0.35)',
      },
      '&:hover span': {
        transform: 'translateX(4px)',
      },
    },
    secondary: {
      color: 'var(--ink)',
      fontSize: '0.95rem',
      textDecoration: 'none',
      paddingBottom: 4,
      borderBottom: '1px solid var(--line-strong)',
      transition: 'border-color 0.3s ease, color 0.3s ease',
      '&:hover': {
        color: 'var(--signal)',
        borderColor: 'var(--signal)',
      },
    },
    telemetry: {
      ...rise,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      margin: 0,
      marginTop: theme.spacing(8),
      borderTop: '1px solid var(--line)',
      '& > div': {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
      '& dt': {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.62rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-mute)',
        marginBottom: 6,
      },
      '& dd': {
        margin: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--ink)',
      },
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: '1fr 1fr',
      },
    },
    typedCell: {
      [theme.breakpoints.down("xs")]: {
        gridColumn: '1 / -1',
      },
      '& dd': {
        color: 'var(--signal) !important',
      },
    },
  }));
