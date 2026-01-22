import React from "react";
import { useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  skillName: {
    color: "#c7c9d1", 
    fontFamily: 'Orbitron, Space Grotesk, Inter, Montserrat, Roboto, Arial, sans-serif',
    letterSpacing: '1.5px',
    textShadow: '0 0 8px rgba(57, 200, 250, 0.3)',
    [theme.breakpoints.down("sm")]: {
      fontSize: '0.9rem',
      letterSpacing: '1px',
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