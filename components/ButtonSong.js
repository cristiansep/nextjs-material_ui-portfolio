import React, {useState} from 'react'
import useSound from "use-sound";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';


export default function ButtonSong() {
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

      <IconButton
      color="inherit"
      onClick={handlePlaySound}
      >
        {clicked ? <StopIcon /> : <PlayArrowIcon />}
      </IconButton>
    );
  }

