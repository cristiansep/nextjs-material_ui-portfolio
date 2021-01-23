import React from "react";
import { useEffect } from "react";
import Typography from '@material-ui/core/Typography';




export const ProgressBar = ({name,done}) => {



  const [style, setStyle] = React.useState({});

  useEffect(() => {

    window.addEventListener('scroll', () => {


      const about = document.querySelector('#skill');
      const ubicacion = about.getBoundingClientRect();
      if(ubicacion.top < 200){
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
      <Typography variant="h6" >
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