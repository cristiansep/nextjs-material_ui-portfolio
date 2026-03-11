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
      opacity: 0.6,
    },
    "50%": {
      transform: 'scale(1.1)',
      opacity: 1,
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
  },
  iconStyle: {
    fontSize: '28px',
    color: 'rgba(255, 255, 255, 0.6)',
    animation: '$pulseGlow 2.5s ease-in-out infinite',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down("sm")]: {
      fontSize: '22px',
    },
    "&:hover, &:active, &:focus": {
      animationPlayState: 'paused',
      color: '#39c8fa',
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
