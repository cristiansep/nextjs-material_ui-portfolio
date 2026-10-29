import React from 'react';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';

import Title from '../widgets/Title';
import { aboutData, stackData, contactData } from '../../data';
import useStyles from './styles';

export const About = () => {
  const classes = useStyles();
  const [about] = aboutData;
  const [contact] = contactData;

  return (
    <section className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="lg" id="about">
        <Title index="01" kicker="Tripulante" title="Sobre" accent="mí" />

        <div className={classes.grid}>
          <Fade bottom distance="30px">
            <figure className={classes.figure}>
              <div className={classes.frame}>
                <img src={about.img} alt={`Retrato de ${about.name}`} className={classes.photo} />
              </div>
              <figcaption className={classes.caption}>
                <span>Fig. 01</span>
                <span>{about.name} — {contact.address}</span>
              </figcaption>
            </figure>
          </Fade>

          <div>
            <Fade bottom distance="30px">
              <p className={classes.lead}>{about.lead}</p>
              {about.summary.map((paragraph) => (
                <p key={paragraph} className={classes.text}>{paragraph}</p>
              ))}
            </Fade>

            <Fade bottom distance="30px">
              <dl className={classes.stack}>
                {stackData.map(({ area, items }) => (
                  <div key={area} className={classes.stackRow}>
                    <dt>{area}</dt>
                    <dd>
                      {items.map((item) => (
                        <span key={item} className={classes.chip}>{item}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};
