import React from 'react';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';

import Title from '../widgets/Title';
import useStyles from './styles';
import { servicesData } from '../../data';

export default function Services() {
  const classes = useStyles();

  return (
    <section>
      <Container className={classes.cardGrid} maxWidth="lg" id="servicios">
        <Title index="02" kicker="Capacidades" title="Lo que" accent="aporto" />

        <div className={classes.grid}>
          {servicesData.map((item, idx) => (
            <Fade bottom distance="30px" delay={idx * 120} key={item.id}>
              <article className={classes.card}>
                <span className={classes.number}>{String(idx + 1).padStart(2, '0')}</span>
                <h3 className={classes.title}>{item.title}</h3>
                <p className={classes.description}>{item.description}</p>
                <ul className={classes.tags}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
}
