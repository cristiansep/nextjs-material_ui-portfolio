import { v4 as uuidv4 } from 'uuid';


export const headData = {
    title: 'CristianSep',
    lang: 'es',
    author: 'Cristian Sepúlveda', 
    description: 'Cristian Sepúlveda — Ingeniero de software full stack. Arquitecturas web, mobile e IA aplicada.', 
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
    lead: 'Llevo más de siete años construyendo aplicaciones web y móviles de punta a punta.',
    summary: [
      'Me especializo en arquitecturas modernas: microfrontends, microservicios, Flux, hexagonal, FBA (Feature-Based Architecture) y FSD (Feature-Sliced Design).',
      'He liderado proyectos de alto impacto bajo metodologías ágiles —especialmente SCRUM—, optimizando rendimiento y escalabilidad tanto en el frontend como en el backend, y he construido aplicaciones nativas con React Native.',
      'Me importan la calidad, la mejora continua y entregar soluciones de ingeniería a tiempo.',
    ],
  }
];

  // STACK DATA (agrupado por área, sin porcentajes)
  export const stackData = [
    { area: 'Frontend', items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
    { area: 'Backend', items: ['Node.js', 'Express', 'APIs REST', 'Microservicios'] },
    { area: 'Mobile', items: ['React Native', 'Expo'] },
    { area: 'Arquitectura', items: ['Microfrontends', 'Hexagonal', 'Flux', 'FBA', 'FSD'] },
    { area: 'IA aplicada', items: ['LangChain', 'OpenAI', 'Google GenAI', 'RAG', 'ChromaDB'] },
  ];


// PORTFOLIO DATA
  export const portfolioData = [
    {
      id:uuidv4(),
      title:"RAG - Retrieval-Augmented Generation",
      technology:"Next.js, TypeScript, LangChain, OpenAI, Google GenAI, ChromaDB, Tailwind CSS",
      features:"Ingesta de documentos, generación de embeddings, búsqueda semántica, respuestas contextuales con LLM, API RESTful.",
      date:"2026",
      codeUrl:"",
      demoUrl:""
    },
    {
      id:uuidv4(),
      title:"Termic - Diseñador de Ventanas Termopanel",
      technology:"React 19, TypeScript, Vite, Tailwind CSS, Zustand, jsPDF",
      features:"Diseñador visual interactivo, cálculo automático de precios con descuentos, exportación a PDF, persistencia local, diseño responsive.",
      date:"2025",
      codeUrl:"",
      demoUrl:""
    },
    {
      id:uuidv4(),
      title:"Semtris - Sitio de Producto SaaS",
      technology:"Next.js 16, TypeScript, Tailwind CSS v4, Resend, SVG isométrico",
      features:"Landing B2B para TermoDesign y TallerPro, figuras isométricas animadas, formulario de contacto con envío de email, SEO con JSON-LD y sitemap.",
      date:"2026",
      codeUrl:"",
      demoUrl:"https://www.semtris.cl"
    },
    {
      id:uuidv4(),
      title:"Blogs",
      technology:"React Native, Expo.",
      features:"CRUD, Context API, Reducer, reutilización de componentes.",
      date:"Enero 2021",
      codeUrl:"https://github.com/cristiansep/BlogApp",
      demoUrl:""
    },
  ]




  export const servicesData = [
    {
        id:uuidv4(),
        title:"Arquitectura que escala",
        description:"Diseño sistemas pensados para crecer: microfrontends, microservicios y arquitecturas hexagonales o feature-sliced que mantienen el código ordenado cuando el equipo y el producto se multiplican.",
        tags:["Microfrontends", "Microservicios", "FSD"]
    },
    {
        id:uuidv4(),
        title:"Producto de punta a punta",
        description:"Del backend en Node a la interfaz en React, Angular o React Native. Me hago cargo del ciclo completo, cuidando el rendimiento, la calidad y los plazos de entrega.",
        tags:["Web", "Mobile", "APIs"]
    },
    {
        id:uuidv4(),
        title:"IA aplicada",
        description:"Integro modelos de lenguaje en productos reales: ingesta de documentos, embeddings, búsqueda semántica y respuestas con contexto (RAG).",
        tags:["LangChain", "RAG", "LLM"]
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
 
