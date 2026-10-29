import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';

import Title from '../widgets/Title';
import useStyles from './styles';
import { emailContact } from '../../helpers/emailContact';
import { contactData } from '../../data';

const initEvent = {
  name: '',
  email: '',
  subject: '',
  msg: '',
};

const fields = [
  { name: 'name', label: 'Nombre', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Correo electrónico', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Asunto', type: 'text' },
];

export default function Contact() {
  const classes = useStyles();
  const [contact] = contactData;
  const [contactForm, setContactForm] = useState(initEvent);

  const handleInputChange = ({ target }) => {
    setContactForm({
      ...contactForm,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    emailContact(e.target);
    setContactForm(initEvent);
  };

  return (
    <section>
      <Container className={classes.cardGrid} maxWidth="lg" id="contact">
        <Title index="04" kicker="Canal abierto" title="Hablemos" />

        <div className={classes.grid}>
          <Fade bottom distance="30px">
            <div>
              <p className={classes.pitch}>
                ¿Tienes una <em>misión</em> en mente? Cuéntame qué quieres construir y te respondo pronto.
              </p>
              <a href={`mailto:${contact.email}`} className={classes.email}>
                {contact.email} <span aria-hidden="true">→</span>
              </a>
              <dl className={classes.details}>
                <div>
                  <dt>Teléfono</dt>
                  <dd><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></dd>
                </div>
                <div>
                  <dt>Ubicación</dt>
                  <dd>{contact.address}</dd>
                </div>
              </dl>
            </div>
          </Fade>

          <Fade bottom distance="30px" delay={150}>
            <form className={classes.form} onSubmit={handleSubmitForm}>
              {fields.map((field) => (
                <label key={field.name} className={classes.field}>
                  <span>{field.label}</span>
                  <input
                    required
                    type={field.type}
                    name={field.name}
                    autoComplete={field.autoComplete}
                    value={contactForm[field.name]}
                    onChange={handleInputChange}
                  />
                </label>
              ))}
              <label className={classes.field}>
                <span>Mensaje</span>
                <textarea
                  required
                  name="msg"
                  rows={4}
                  value={contactForm.msg}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit" className={classes.submit}>
                Enviar mensaje <span aria-hidden="true">→</span>
              </button>
            </form>
          </Fade>
        </div>
      </Container>
    </section>
  );
}
