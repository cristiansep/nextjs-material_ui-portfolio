import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import {Link} from 'react-scroll';
import { Menu } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';


import useStyles from './styles';




export default function AppBarCollapse() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  <div className={classes.root} id="appbar-collapse">
    <div className={classes.buttonCollapse}>
    <IconButton onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true" className={classes.iconButtonBorder} color="inherit" size="small">
            <Fade top>
                 <MenuIcon/>
            </Fade>
        </IconButton>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <MenuItem >
        <Link to="inicio" onClick={handleClose} activeClass="active" spy={true}  smooth={true} duration={1000}>Inicio</Link>
      </MenuItem>
      <MenuItem >
        <Link to="about" onClick={handleClose} activeClass="active" spy={true}  smooth={true} duration={1000}>Acerca de</Link>
      </MenuItem>
      <MenuItem>
        <Link to="servicios" onClick={handleClose} activeClass="active" spy={true}  smooth={true} duration={1000}>Servicios</Link>
      </MenuItem>
      <MenuItem>
        <Link to="portfolio" onClick={handleClose} activeClass="active" spy={true} smooth={true} duration={1000}>Portafolio</Link>
      </MenuItem>
      <MenuItem>
        <Link to="contact" onClick={handleClose} activeClass="active" spy={true}  smooth={true} duration={1000}>Contacto</Link>
      </MenuItem>
      </Menu>
      </div>
      <Fade top cascade>
     <Box component="div" className={classes.buttonBar} id="appbar-collapse">
          <Button color="inherit" className={classes.buttonBorder2}>
            <Link to="inicio" activeClass={classes.active} spy={true}  smooth={true} duration={1000}>Inicio</Link>
          </Button>
          <Button color="inherit" className={classes.buttonBorder2}>
            <Link to="about" activeClass={classes.active} spy={true} offset={50}  smooth={true} duration={1000}>Acerca de</Link>
          </Button>
          <Button color="inherit" className={classes.buttonBorder2}>
            <Link to="servicios" activeClass={classes.active} spy={true} offset={50}  smooth={true} duration={1000}>Servicios</Link>
          </Button>
          <Button color="inherit" className={classes.buttonBorder2}>
            <Link to="portfolio" activeClass={classes.active} spy={true} offset={50}  smooth={true} duration={1000}>Portafolio</Link>
          </Button>
          <Button color="inherit" className={classes.buttonBorder2}>
            <Link to="contact" activeClass={classes.active}  spy={true} offset={50}  smooth={true} duration={1000}>Contacto</Link>
          </Button>
    </Box>
    </Fade>
            
  </div>
)};
