import { makeStyles } from "@material-ui/core/styles";

const mono = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.68rem',
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
    list: {
      borderTop: '1px solid var(--line)',
    },
    row: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '56px 110px 1fr auto',
      gap: theme.spacing(3),
      alignItems: 'baseline',
      padding: theme.spacing(5, 0),
      borderBottom: '1px solid var(--line)',
      transition: 'padding 0.5s var(--ease-out)',
      '&:hover': {
        paddingLeft: theme.spacing(2),
      },
      '&:hover $title': {
        color: 'var(--signal)',
      },
      '&:hover $index': {
        color: 'var(--flare)',
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: 'auto 1fr',
        gap: theme.spacing(1, 2),
        padding: theme.spacing(4, 0),
        '&:hover': {
          paddingLeft: 0,
        },
      },
    },
    index: {
      ...mono,
      color: 'var(--ink-mute)',
      transition: 'color 0.3s ease',
    },
    date: {
      ...mono,
      color: 'var(--ink-mute)',
    },
    body: {
      maxWidth: 640,
      [theme.breakpoints.down("sm")]: {
        gridColumn: '1 / -1',
      },
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
      lineHeight: 1.08,
      color: 'var(--ink)',
      margin: 0,
      transition: 'color 0.4s var(--ease-out)',
    },
    features: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      margin: 0,
      marginTop: theme.spacing(2),
    },
    tech: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginTop: theme.spacing(2.5),
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(1, 2),
      ...mono,
      fontSize: '0.62rem',
      color: 'var(--ink-mute)',
      '& li::before': {
        content: '"/ "',
        color: 'var(--flare)',
      },
    },
    links: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: theme.spacing(1.5),
      [theme.breakpoints.down("sm")]: {
        gridColumn: '1 / -1',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: theme.spacing(1),
      },
    },
    link: {
      ...mono,
      color: 'var(--ink)',
      textDecoration: 'none',
      paddingBottom: 3,
      borderBottom: '1px solid var(--line-strong)',
      whiteSpace: 'nowrap',
      transition: 'color 0.3s ease, border-color 0.3s ease',
      '&:hover': {
        color: 'var(--flare)',
        borderColor: 'var(--flare)',
      },
    },
    private: {
      ...mono,
      fontSize: '0.6rem',
      color: 'var(--ink-mute)',
      padding: '3px 8px',
      border: '1px dashed var(--line-strong)',
      borderRadius: 100,
    },
}));
