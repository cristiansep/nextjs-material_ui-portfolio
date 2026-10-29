import { makeStyles } from "@material-ui/core/styles";

const corner = {
  content: '""',
  position: 'absolute',
  width: 18,
  height: 18,
  borderColor: 'var(--flare)',
  borderStyle: 'solid',
  zIndex: 1,
};

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  cardGrid: {
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(14),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(10),
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(240px, 5fr) 7fr',
    gap: theme.spacing(10),
    alignItems: 'start',
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: '1fr',
      gap: theme.spacing(6),
    },
  },
  figure: {
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 360,
    },
  },
  frame: {
    position: 'relative',
    padding: 10,
    '&::before': { ...corner, top: 0, left: 0, borderWidth: '1px 0 0 1px' },
    '&::after': { ...corner, bottom: 0, right: 0, borderWidth: '0 1px 1px 0' },
  },
  photo: {
    display: 'block',
    width: '100%',
    aspectRatio: '4 / 5',
    objectFit: 'cover',
    filter: 'grayscale(1) contrast(1.1) brightness(0.9)',
    transition: 'filter 0.8s var(--ease-out)',
    '&:hover': {
      filter: 'grayscale(0) contrast(1) brightness(1)',
    },
  },
  caption: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    marginTop: theme.spacing(1.5),
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink-mute)',
  },
  lead: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    lineHeight: 1.15,
    color: 'var(--ink)',
    margin: 0,
    marginBottom: theme.spacing(4),
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: 1.75,
    fontWeight: 300,
    color: 'var(--ink-soft)',
    margin: 0,
    marginBottom: theme.spacing(2.5),
    maxWidth: '62ch',
  },
  stack: {
    margin: 0,
    marginTop: theme.spacing(7),
    borderTop: '1px solid var(--line)',
  },
  stackRow: {
    display: 'grid',
    gridTemplateColumns: '140px 1fr',
    gap: theme.spacing(2),
    alignItems: 'baseline',
    padding: theme.spacing(2.25, 0),
    borderBottom: '1px solid var(--line)',
    '& dt': {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.68rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-mute)',
    },
    '& dd': {
      margin: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: '1fr',
      gap: theme.spacing(1.5),
    },
  },
  chip: {
    fontSize: '0.9rem',
    color: 'var(--ink)',
    padding: '4px 12px',
    border: '1px solid var(--line)',
    borderRadius: 100,
    transition: 'border-color 0.3s ease, color 0.3s ease',
    '&:hover': {
      borderColor: 'var(--signal)',
      color: 'var(--signal)',
    },
  },
}));
