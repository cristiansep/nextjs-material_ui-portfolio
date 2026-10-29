import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {animateScroll as scroll} from 'react-scroll'
import  Profile  from '../Profile'
import { About } from '../About';
import Services from '../Services';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Footer from '../Footer';




const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      zIndex: 1,
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    backColor: {
      background: 'rgba(5, 6, 13, 0.7)',
      backdropFilter: 'blur(10px)',
      color: 'var(--ink)',
      border: '1px solid var(--line-strong)',
      boxShadow: 'none',
      zIndex:99999,
      transition: 'all 0.3s ease',
      "&:hover,&.MuiButton-hover":{
        background: 'var(--flare)',
        borderColor: 'var(--flare)',
        color: 'var(--bg)',
      },
      "&:focus, &.Mui-focusVisible": {
        outline: 'none',
        textShadow: '0 0 0 #ffff',
      }
    },
    // Velo bajo el hero: deja ver las estrellas tenuemente detrás del contenido
    sections: {
      background: 'linear-gradient(to bottom, rgba(5, 6, 13, 0.6) 0, rgba(5, 6, 13, 0.92) 60vh)',
    },
  }));
  
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,

    window: PropTypes.func,
  };



export const Layout = (props) => {
  const classes = useStyles();

        return (
          <React.Fragment>
            <CssBaseline />
            <div style={{ zIndex:2, position: 'relative' }}>
            <ScrollTop {...props}>
              <Fab
                size="medium"
                aria-label="scroll back to top"
                className={classes.backColor}
                onClick={() => scroll.scrollToTop()}
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
            < Profile/>
            <main className={classes.sections}>
              <About/>
              <Services/>
              <Portfolio/>
              <Contact/>
            </main>
            <Footer/>
            </div>
          </React.Fragment>
        );

}