import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid var(--line)',
      borderLeft: '1px solid var(--line)',
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: '1fr',
      },
    },
    card: {
      position: 'relative',
      height: '100%',
      boxSizing: 'border-box',
      padding: theme.spacing(5, 4),
      borderRight: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      transition: 'background 0.5s var(--ease-out)',
      // Barra de acento que crece al pasar el mouse
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        height: 2,
        width: 0,
        background: 'var(--flare)',
        transition: 'width 0.6s var(--ease-out)',
      },
      '&:hover': {
        background: 'rgba(236, 239, 246, 0.025)',
      },
      '&:hover::before': {
        width: '100%',
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 3),
      },
    },
    number: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '3.5rem',
      lineHeight: 1,
      color: 'var(--signal)',
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3),
      },
    },
    title: {
      fontFamily: 'var(--font-body)',
      fontSize: '1.35rem',
      fontWeight: 500,
      color: 'var(--ink)',
      margin: 0,
      marginBottom: theme.spacing(2),
    },
    description: {
      flex: 1,
      fontSize: '0.98rem',
      lineHeight: 1.7,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      margin: 0,
    },
    tags: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginTop: theme.spacing(4),
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(2),
      fontFamily: 'var(--font-mono)',
      fontSize: '0.62rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-mute)',
      '& li::before': {
        content: '"/ "',
        color: 'var(--flare)',
      },
    },
}));
