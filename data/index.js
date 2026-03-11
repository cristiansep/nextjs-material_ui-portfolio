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
    resume: '/docs/cv-2026.pdf',
    summary: `Profesional con más de siete años de experiencia en el ciclo
    completo de desarrollo de aplicaciones web y móviles.
    Experto en arquitecturas modernas como Arquitectura de Microfrontend, Microservicios, Flux, Hexagonal, FBA (Feature-Based
    Architecture) y FSD (Feature-Sliced Design).
    Cuento con sólida experiencia en el desarrollo bajo metodologías
    ágiles, especialmente SCRUM. He liderado proyectos de alto
    impacto, optimizando rendimiento y escalabilidad, tanto en el frontend como en el back-end, y construido aplicaciones nativas con
    React Native.
    Comprometido con la calidad, la mejora continua y la entrega
    oportuna de soluciones de ingeniería.`,
  }
];

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
      title:"RAG - Retrieval-Augmented Generation",
      technology:"Next.js, TypeScript, LangChain, OpenAI, Google GenAI, ChromaDB, Tailwind CSS",
      features:"Ingesta de documentos, generación de embeddings, búsqueda semántica, respuestas contextuales con LLM, API RESTful.",
      date:"2026",
      img:"/images/undraw_react_y7wq.svg",
      codeUrl:"",
      demoUrl:""
    },
    {
      id:uuidv4(),
      title:"Termic - Diseñador de Ventanas Termopanel",
      technology:"React 19, TypeScript, Vite, Tailwind CSS, Zustand, jsPDF",
      features:"Diseñador visual interactivo, cálculo automático de precios con descuentos, exportación a PDF, persistencia local, diseño responsive.",
      date:"2025",
      img:"/images/undraw_code_review_l1q9.svg",
      codeUrl:"",
      demoUrl:""
    },
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
 
