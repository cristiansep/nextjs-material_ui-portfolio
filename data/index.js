import { v4 as uuidv4 } from 'uuid';


export const headData = {
    title: 'CristianSep',
    lang: 'en',
    author: 'Cristian Sepúlveda', 
    description: 'Portafolio creado con material-ui', 
  };
  
  
  // ABOUT DATA
  export const aboutData = [
      {
      id: uuidv4(),
      name: 'Cristian Sepúlveda',
      perfil: 'Full Stack Developer',
      email: 'cristiansepulvedamendez@gmail.com',
      phone: '+ 56 9 4550 4578',
      img: '/images/new-me.jpeg',
      resume: '/docs/cv-2025.pdf', 
      summary: ` Profesional con más de 5 años de experiencia en el ciclo completo de desarrollo de aplicaciones web y móviles. Experto en arquitecturas REST y MVC, desarrollo de microservicios y metodologías ágiles (SCRUM). He liderado proyectos de alto impacto, optimizando rendimiento y escalabilidad, tanto en el front- end como en el back-end, y construido apps nativas con React Native. Comprometido con la calidad, la mejora continua y la entrega oportuna de soluciones.`,
    }
  ] ;

  // SKILL DATA
  export const skillData = [
    {name: 'Node - Express - TypeScript', num:90},
    {name: 'React', num:90},
    {name: 'Angular', num:70},
    {name: 'Javascript', num:90}
  ];


// PORTFOLIO DATA
  export const portfolioData = [
    {
      id:uuidv4(),
      title:"Plataforma de Reserva de Horas Médicas",
      technology:"React.js, Context Api, Material UI, Moment.js",
      features:"Administración de usuarios, Administración de horarios, Autenticación, Protección de rutas.",
      date:"Noviembre/Diciembre 2020",
      img:"/images/undraw_react_y7wq.svg",
      codeUrl:"https://github.com/cristiansep/ReservasApp",
      demoUrl:""
    },
    // {
    //   id:uuidv4(),
    //   title:"Aplicación de Diario Personal",
    //   technology:"Firebase, React.js, Redux, Sass.",
    //   features:"Autenticación normal y con google, CRUD, Manejo de estado global, Subida de archivos a cloudinary.",
    //   date:"Agosto 2020",
    //   img:"/images/undraw_finance_0bdk.svg",
    //   codeUrl:"https://github.com/cristiansep/JournalApp",
    //   demoUrl:"https://stupefied-jang-d3ed8b.netlify.app"
    // },
    {
      id:uuidv4(),
      title:"API RESTful para Gestión de Reservas",
      technology:"Node.js,Express.js, Jsonwebtoken, Sequelize, Nodemailer.",
      features:"Autenticación, Protección de rutas, CRUD, Subida de archivos, Envio de emails",
      date:"Noviembre/Diciembre 2020",
      img:"/images/undraw_code_review_l1q9.svg",
      codeUrl:"https://github.com/cristiansep/Backend-Sequelize",
      
    },
    // {
    //   id:uuidv4(),
    //   title:"Sitio Web de Portafolio Profesional",
    //   technology:"Nextjs, Material UI, React-spring.",
    //   features:"Animaciones, Diseño web responsivo, Formulario de contacto sin servidor, .",
    //   date:"Enero 2021",
    //   img:"/images/undraw_portfolio_website_lidw.svg",
    //   codeUrl:"https://github.com/cristiansep/nextjs-material_ui-portfolio",
    //   demoUrl:""
    // },
    {
      id:uuidv4(),
      title:"Aplicación Móvil de Recetas y Comidas",
      technology:"React Native, Expo.",
      features:"Consumo de APIS, tratamiento de imágenes, hooks.",
      date:"Enero 2021",
      img:"/images/movil-1.svg",
      codeUrl:"https://github.com/cristiansep/Food-App",
      demoUrl:""
    },
    {
      id:uuidv4(),
      title:"Blogs",
      technology:"React Native, Expo.",
      features:"CRUD, Context API, Reducer, reutilización de componentes.",
      date:"Enero 2021",
      img:"/images/movil-2.svg",
      codeUrl:"https://github.com/cristiansep/BlogApp",
      demoUrl:""
    },
  ]




  export const servicesData = [
    {
        id:uuidv4(),
        title:"Rápido",
        description:"Mi mayor prioridad son los tiempos de carga rápidos e interacción sin retrasos.",
        img:'/images/undraw_To_the_stars_qhyy.svg'
    },
    {
        id:uuidv4(),
        title:"Responsivo",
        description:"Mis diseños funcionan en todos los dispositivos y en todo tipo de pantallas.",
        img:'/images/undraw_progressive_app_m9ms.svg'
    },
    
    {
        id:uuidv4(),
        title:"Dinámico",
        description:"Los sitios web no tienen por qué ser estáticos, me encanta hacer que las páginas cobren vida.",
        img:'/images/undraw_server_cluster_jwwq.svg'
    },
  ]

// CONTACT DATA
  export const contactData = [
    {
      id:uuidv4(),
      phone: '+ 56 9 4550 4578',
      address: 'Temuco, Chile',
      email: 'cristiansepulvedamendez@gmail.com',
    },
  ]
  


  // FOOTER DATA
export const networks = [
    {
      id: uuidv4(),
      urlGit: 'https://github.com/cristiansep',
      urlTwitter: 'https://twitter.com/crist_sepulveda',
      urlIn: 'https://www.linkedin.com/in/cristiansep',
    }
  ]
 
