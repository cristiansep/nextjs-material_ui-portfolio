import React, {useState} from 'react'
import useSound from "use-sound";
import IconButton from "@material-ui/core/IconButton";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';
import { makeStyles } from "@material-ui/core/styles";
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    "&:focus, &.Mui-focusVisible": {
      outline: "none",
      background: "transparent",
      textShadow: "0 0 0 #ffff",
    },
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      opacity: 1,
      backgroundColor: "transparent"
    
    },
    WebkitTransform: 'perspective(1px) translateZ(0)',
    transform: 'perspective(1px) translateZ(0)',
    WebkitTransitionDuration: '0.3s',
    transitionDuration: '0.3s'
  },
  iconStyle: {
    fontSize: '35px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '25px',
    },
    webkitTransform: 'translateZ(0)',
    transform: 'translateZ(0)',
    webkitTransitionDuration: '0.3s',
    transitionDuration: '0.3s',
    webkitTransitionProperty: 'transform',
    transitionProperty: 'transform',
    webkitTransitionTimingFunction: 'ease-out',
    transitionTimingFunction: 'ease-out',
    "&:hover, &:active, &:focus": {
      webkitTransform: 'scale(1.3) translateZ(0)',
      transform: 'scale(1.3) translateZ(0)',
    },
  },
}));


export default function ButtonSong({navBackground}) {

    const classes = useStyles();
    const soundUrl = '/sounds/Just.mp3';
  
    const [clicked, setClicked] = useState();
    const [play, { stop, isPlaying }] = useSound(soundUrl, {volume: 0.2});


    const handlePlaySound = () => {
      if(!isPlaying) {
        setClicked(true)
        play()
      }else {
        setClicked(false)
        stop()
      }
    }

  
    return (

      <>
       <Zoom>
      <IconButton
      style={{color:'white'}}
      className={classes.buttonStyle}
      onClick={handlePlaySound}
      >
        {clicked ? <MusicNoteIcon className={classes.iconStyle}/> : <MusicOffIcon  className={classes.iconStyle}/>}
      </IconButton>
      </Zoom>
      </>
    );
  }

