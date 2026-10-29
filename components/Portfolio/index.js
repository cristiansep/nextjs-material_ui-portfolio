import React from 'react';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';

import Title from '../widgets/Title';
import { portfolioData } from '../../data';
import useStyles from './styles';

function ProjectRow({ index, title, technology, features, date, codeUrl, demoUrl }) {
  const classes = useStyles();
  const techList = technology.replace(/\.$/, '').split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <Fade bottom distance="20px">
      <article className={classes.row}>
        <span className={classes.index}>{String(index + 1).padStart(2, '0')}</span>
        <span className={classes.date}>{date}</span>

        <div className={classes.body}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.features}>{features}</p>
          <ul className={classes.tech}>
            {techList.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className={classes.links}>
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={classes.link}>
              Código <span aria-hidden="true">↗</span>
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={classes.link}>
              Demo <span aria-hidden="true">↗</span>
            </a>
          )}
          {!codeUrl && !demoUrl && (
            <span className={classes.private}>Privado</span>
          )}
        </div>
      </article>
    </Fade>
  );
}

export default function Portfolio() {
  const classes = useStyles();

  return (
    <section>
      <Container className={classes.cardGrid} maxWidth="lg" id="portfolio">
        <Title index="03" kicker="Bitácora de misiones" title="Proyectos" accent="seleccionados" />

        <div className={classes.list}>
          {portfolioData.map((item, idx) => (
            <ProjectRow key={item.id} index={idx} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
