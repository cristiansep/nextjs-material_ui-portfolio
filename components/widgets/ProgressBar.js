import React from "react";
import { useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  skillName: {
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: 'Outfit, sans-serif',
    letterSpacing: '1px',
    fontWeight: 500,
    fontSize: '0.9rem',
    [theme.breakpoints.down("sm")]: {
      fontSize: '0.8rem',
      letterSpacing: '0.5px',
    },
  },
}));

export const ProgressBar = ({name,done}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [style, setStyle] = React.useState({});

  useEffect(() => {

    window.addEventListener('scroll', () => {


      const about = document.querySelector('#skill');
      const ubicacion = about.getBoundingClientRect();
      if(ubicacion.top < 100){
          const newStyle = {
            opacity: 1,
            width: `${done}%`,
          };
          setStyle(newStyle);
      }

    })
  }, [done]);



  return (
    <div>
      <Typography variant={isMobile ? "body1" : "h6"} className={classes.skillName}>
        {name}
      </Typography>
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </div>
  );
};
