import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll';

import useStyles from './styles';

const navItems = [
  { to: 'about', label: 'Sobre mí' },
  { to: 'servicios', label: 'Capacidades' },
  { to: 'portfolio', label: 'Proyectos' },
  { to: 'contact', label: 'Contacto' },
];

export default function AppBarCollapse() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {/* Menú mobile */}
      <div className={classes.buttonCollapse}>
        <IconButton
          onClick={(event) => setAnchorEl(event.currentTarget)}
          aria-controls="nav-menu"
          aria-haspopup="true"
          aria-label="Abrir menú"
          className={classes.menuButton}
          size="small"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{ paper: classes.menuPaper }}
        >
          {navItems.map((item, idx) => (
            <MenuItem key={item.to} className={classes.menuItem}>
              <Link to={item.to} onClick={handleClose} spy smooth duration={900} offset={-40}>
                <span className={classes.navIndex}>0{idx + 1}</span>{item.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* Navegación desktop */}
      <nav className={classes.nav} aria-label="Secciones">
        {navItems.map((item, idx) => (
          <Link
            key={item.to}
            to={item.to}
            href={`#${item.to}`}
            className={classes.navLink}
            activeClass={classes.active}
            spy
            smooth
            duration={900}
            offset={-40}
          >
            <span className={classes.navIndex}>0{idx + 1}</span>{item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
