import React from 'react';
import { Container } from '@material-ui/core';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

import { aboutData, contactData } from '../../data';
import useStyles from './styles';

export default function Perfil() {
  const classes = useStyles();
  const [about] = aboutData;
  const [contact] = contactData;

  return (
    <section className={classes.hero}>
      <Container className={classes.inner} maxWidth="lg" id="inicio">
        <div className={classes.content}>
          <p className={classes.status} style={{ animationDelay: '0.1s' }}>
            <span className={classes.dot} />
            Disponible para nuevos proyectos
          </p>

          <h1 className={classes.name} style={{ animationDelay: '0.2s' }}>
            Cristian <em>Sepúlveda</em>
          </h1>

          <p className={classes.pitch} style={{ animationDelay: '0.35s' }}>
            Ingeniero de software full stack. Diseño y construyo productos web,
            mobile e IA que escalan — desde la arquitectura hasta el último píxel.
          </p>

          <div className={classes.actions} style={{ animationDelay: '0.5s' }}>
            <Link to="portfolio" smooth duration={900} offset={-40} className={classes.primary} href="#portfolio">
              Ver proyectos <span aria-hidden="true">→</span>
            </Link>
            <a href={about.resume} target="_blank" rel="noopener noreferrer" className={classes.secondary}>
              Descargar CV
            </a>
          </div>
        </div>

        {/* Barra de telemetría */}
        <dl className={classes.telemetry} style={{ animationDelay: '0.7s' }}>
          <div>
            <dt>Base</dt>
            <dd>{contact.address}</dd>
          </div>
          <div>
            <dt>Experiencia</dt>
            <dd>7+ años en órbita</dd>
          </div>
          <div className={classes.typedCell}>
            <dt>Rol</dt>
            <dd>
              <Typed
                strings={['Software Engineer', 'Senior Full Stack Developer', 'Mobile & IA']}
                typeSpeed={45}
                backSpeed={30}
                backDelay={1800}
                loop
              />
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
