import React, {useState} from 'react'
import useSound from "use-sound";
import IconButton from "@material-ui/core/IconButton";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';
import { makeStyles } from "@material-ui/core/styles";
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  "@keyframes pulseGlow": {
    "0%, 100%": {
      transform: 'scale(1)',
      filter: 'drop-shadow(0 0 8px rgba(57, 200, 250, 0.5))',
    },
    "50%": {
      transform: 'scale(1.15)',
      filter: 'drop-shadow(0 0 15px rgba(57, 200, 250, 0.9))',
    },
  },
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
    filter: 'drop-shadow(0 0 8px rgba(57, 200, 250, 0.5))',
    animation: '$pulseGlow 2s ease-in-out infinite',
    [theme.breakpoints.down("sm")]: {
      fontSize: '25px',
    },
    "&:hover, &:active, &:focus": {
      animationPlayState: 'paused',
      transform: 'scale(1.3)',
      filter: 'drop-shadow(0 0 15px rgba(57, 200, 250, 0.8))',
    },
  },
}));



export default function ButtonSong({navBackground}) {

    const classes = useStyles();
    const soundUrl = '/sounds/reflected.mp3';
  
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
            style={{ color: 'white' }}
            className={classes.buttonStyle}
            onClick={handlePlaySound}
          >
            {clicked ? (
              <MusicNoteIcon className={classes.iconStyle} />
            ) : (
              <MusicOffIcon className={classes.iconStyle} />
            )}
          </IconButton>
        </Zoom>
      </>
    );
  }

