import React, { useCallback } from 'react'
// import Particles from 'react-particles-js';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
    },
})

export const Particulas = () => {

    const classes = useStyles();

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            canvasClassName={classes.particlesCanva}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                // fpsLimit: 120,
                // interactivity: {
                //     events: {
                //         onClick: {
                //             enable: true,
                //             mode: "push",
                //         },
                //         onHover: {
                //             enable: true,
                //             mode: "repulse",
                //         },
                //         resize: true,
                //     },
                //     modes: {
                //         push: {
                //             quantity: 4,
                //         },
                //         repulse: {
                //             distance: 200,
                //             duration: 0.4,
                //         },
                //     },
                // },
                
                particles: {
                    number:{
                        value: 45,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 1,
                            color: "tomato"
                        }
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 6,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    }
                },
                detectRetina: true,
            }}
        />
            {/* <Particles
            canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number:{
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
            }}
            /> */}
            
        </>
    )
}