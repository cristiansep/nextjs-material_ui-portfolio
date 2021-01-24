import { v4 as uuidv4 } from 'uuid';


export const headData = {
    title: '', // e.g: 'Name | Developer'
    lang: '', // e.g: en, es, fr, jp
    description: '', // e.g: Welcome to my website
  };
  
  
  // ABOUT DATA
  export const aboutData = [{
    id: uuidv4(),
    name: 'Cristian Sepúlveda',
    perfil: 'Full Stack Developer',
    email: 'cristiansepulvedamendez@gmail.com',
    phone: '+ 56 9 4550 4578',
    img: '/images/me.jpg',
    resume: '/docs/Curriculum Cristian Sepúlveda.pdf', 
    summary: ` Soy técnico en programación computacional 
    y en estos momentos me encuentro cursando la carrera de ingeniería en informática 
    en instituto profesional AIEP Osorno.
    Me apasiona programar y crear aplicaciones funcionales e interactivas. 
    Soy un entusiasta de las nuevas tecnologías, 
    gran parte de mi tiempo la dedico a la investigación y desarrollo de estas.`,
  }];
  
 