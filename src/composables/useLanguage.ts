import { ref, computed } from 'vue';

type Language = 'en' | 'es';

const currentLanguage = ref<Language>('en');

const setLanguage = (lang: Language) => {
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
};

const initLanguage = () => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
        currentLanguage.value = savedLang;
    }
};

initLanguage();

const translations = {
    en: {
        nav: {
            experience: 'Experience',
            projects: 'Projects',
            about: 'About Me',
            contact: 'Contact',
            resume: 'Resume'
        },
        hero: {
            intro: 'Hi, I’m Luis Daniel Ramirez Guerra',
            butCallMe: 'but everyone calls me',
            rolePrefix: 'I ',
            phrases: [
                'build modern web applications.',
                'design user-centered experiences.',
                'solve complex problems.'
            ],
            desc: 'I am a software engineer specialized in building and designing exceptional digital experiences. Currently, I focus on creating accessible, user-centered products.',
            ctaWork: 'View my work!',
            ctaContact: 'Get in touch'
        },
        experience: {
            title: 'Where I’ve worked',
            jobs: [
                {
                    company: 'SUB',
                    role: 'Junior Front-End Developer',
                    period: 'April 2022 - July 2022',
                    description: [
                        'Development of a responsive web application for hospital appointment management, including API consumption and web animations. Active participation in the complete migration of an application to React.'
                    ]
                },
                {
                    company: 'Softtek',
                    role: 'Senior Full Stack Developer',
                    period: 'October 2022 - February 2025',
                    description: [
                        'Development of a financial application for credit request management, implemented using a micro-frontend architecture in React.',
                        'Design and development of responsive interfaces, ensuring a consistent and smooth user experience across multiple devices.',
                        'Development of scalable microservices, optimizing workflows and improving overall system efficiency.',
                        'Implementation of unit tests and end-to-end tests to ensure application quality, stability, and reliability.'
                    ]
                },
                {
                    company: 'Freelance',
                    role: 'Freelance Web Developer',
                    period: '2021 – Present',
                    description: [
                        'Development of modern web applications focused on performance, scalability, and maintainability.',
                        'Design and implementation of responsive interfaces with a strong focus on user experience (UX/UI).',
                        'Integration and consumption of APIs for efficient communication between systems.',
                        'Direct collaboration with clients for requirements analysis, planning, and delivery of digital solutions.'
                    ]
                }
            ]
        },
        projects: {
            title: 'Projects I’ve built',
            list: [
                {
                    title: 'Innate',
                    description: 'Web application for medical appointment management.',
                    tech: ['React', 'GSAP', 'Firebase', 'Node.js'],
                    githubLink: 'https://github.com/DanyGuerra/innate-page/tree/main',
                    projectLink: 'https://innate-main.vercel.app/'
                },
                {
                    title: 'TopStats',
                    description: 'Web application to view statistics of Spotify song plays.',
                    tech: ['Angular', 'GSAP', 'PrimeFlex', 'PrimeNG', 'SCSS'],
                    githubLink: 'https://github.com/DanyGuerra/front_spotistats',
                    projectLink: 'https://topstats-brown.vercel.app/'
                },
                {
                    title: 'Api TopStats',
                    description: 'API to retrieve statistics of Spotify song plays.',
                    tech: ['NestJS', 'TypeScript', 'AWS', 'OAuth', 'MongoDB', 'JWT', 'Jest'],
                    githubLink: 'https://github.com/DanyGuerra/spotistats',
                    projectLink: 'https://topstats-brown.vercel.app/'
                },
                {
                    title: 'RestHub',
                    description: 'Web application for business management. Order, product, and role management, including a Kanban board for order tracking.',
                    tech: [
                        'Next.js',
                        'React',
                        'TypeScript',
                        'shadcn/ui',
                        'Tailwind CSS',
                        'Zustand',
                        'WebSockets',
                        'Socket.io',
                        'AWS',
                        'MongoDB',
                        'Node.js',
                        'Express',
                        'JWT',
                        'Jest'
                    ],
                    githubLink: 'https://github.com/DanyGuerra/business-manager-frontend',
                    projectLink: 'https://business-manager-frontend.vercel.app/'
                },
                {
                    title: 'Api RestHub',
                    description: 'API for business management. Order, menu, product, and administrative role management.',
                    tech: ['NestJS', 'TypeScript', 'AWS', 'PostgreSQL', 'JWT'],
                    githubLink: 'https://github.com/DanyGuerra/api-restaurant-manager',
                    projectLink: 'https://business-manager-frontend.vercel.app/'
                }
            ]
        },
        skills: {
            title: 'Technical Skills',
            categories: {
                Frontend: [
                    'React',
                    'Next.js',
                    'Angular',
                    'TypeScript',
                    'JavaScript (ES6+)',
                    'Tailwind CSS',
                    'shadcn/ui',
                    'GSAP',
                    'PrimeNG',
                    'SCSS',
                    'HTML5',
                    'Ant Design',
                    'Zustand',
                    'WebSockets',
                    'Socket.io',
                    'Cypress'
                ],
                Backend: [
                    'Node.js',
                    'Express',
                    'NestJS',
                    'MongoDB',
                    'PostgreSQL',
                    'Firebase',
                    'AWS',
                    'Socket.io',
                    'Jest',
                    'JWT',
                    'OAuth'
                ],
                Tools: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'Jira']
            }
        },
        contact: {
            number: '05. What’s next?',
            title: 'Get in Touch',
            desc: 'Although I’m not currently seeking new opportunities, my inbox is always open. Whether you have a question or just want to say hello, I’ll do my best to get back to you!',
            btn: 'Contact me',
            socials: {
                github: 'https://github.com/DanyGuerra',
                linkedin: 'https://www.linkedin.com/in/danyguerra/'
            }
        }
    }
    ,
    es: {
        nav: {
            experience: 'Experiencia',
            projects: 'Proyectos',
            about: 'Sobre Mí',
            contact: 'Contacto',
            resume: 'Currículum'
        },
        hero: {
            intro: 'Hola, yo soy Luis Daniel Ramirez Guerra',
            butCallMe: 'pero todos me llaman',
            rolePrefix: 'Yo ',
            phrases: ["creo aplicaciones web modernas.", "diseño experiencias de usuario.", "resuelvo problemas complejos."],
            desc: 'Soy un ingeniero de software especializado en construir y diseñar experiencias digitales excepcionales. Actualmente, me enfoco en crear productos accesibles y centrados en el usuario.',
            ctaWork: 'Ver mi trabajo!',
            ctaContact: 'Contáctame'
        },
        experience: {
            title: "Dónde he trabajado",
            jobs: [
                {
                    company: 'SUB',
                    role: 'Front End Developer Jr.',
                    period: 'Abril 2022 - Julio 2022',
                    description: [
                        'Desarrollo de una aplicación web responsiva para la gestión de citas hospitalarias, incluyendo consumo de APIs y animaciones web. Participación activa en la migración completa de una aplicación a React.'
                    ]
                },
                {
                    company: 'Softtek',
                    role: 'Full Stack Developer Sr.',
                    period: 'Octubre 2022 - Febrero 2025',
                    description: [
                        'Desarrollo de una aplicación financiera para la gestión de solicitudes de crédito, implementada con una arquitectura de micro-frontends en React.',
                        'Diseño y construcción de interfaces responsivas, garantizando una experiencia de usuario consistente y fluida en múltiples dispositivos.',
                        'Desarrollo de microservicios escalables, optimizando flujos de trabajo y mejorando la eficiencia del sistema.',
                        'Implementación de pruebas unitarias y pruebas end-to-end para asegurar la calidad, estabilidad y confiabilidad de la aplicación.'
                    ]

                },
                {
                    company: 'Freelance',
                    role: 'Desarrollador Web Freelance',
                    period: '2021 – Actualidad',
                    description: [
                        'Desarrollo de aplicaciones web modernas orientadas al rendimiento, escalabilidad y mantenibilidad.',
                        'Diseño e implementación de interfaces responsivas con enfoque en experiencia de usuario (UX/UI).',
                        'Integración y consumo de APIs para la comunicación eficiente entre sistemas.',
                        'Colaboración directa con clientes para el análisis de requerimientos, planificación y entrega de soluciones digitales.'
                    ]
                }

            ]
        },
        projects: {
            title: "Proyectos que he construido",
            list: [
                {
                    title: 'Innate',
                    description: 'Aplicación web para la gestión de citas médicas.',
                    tech: ['React', 'GSAP', 'Firebase', 'Node.js'],
                    githubLink: 'https://github.com/DanyGuerra/innate-page/tree/main',
                    projectLink: 'https://innate-main.vercel.app/'
                },
                {
                    title: 'TopStats',
                    description: 'Aplicación web ver las estadisticas de las reproducciones de canciones de Spotify.',
                    tech: ['Angular', 'GSAP', "PrimeFlex", "PrimeNG", "SCSS"],
                    githubLink: 'https://github.com/DanyGuerra/front_spotistats',
                    projectLink: 'https://topstats-brown.vercel.app/'
                },
                {
                    title: 'Api TopStats',
                    description: 'API para obtener estadisticas de las reproducciones de canciones de Spotify.',
                    tech: ['Nestjs', 'TypeScript', 'AWS', 'OAuth', 'MongoDB', 'JWT', 'jest'],
                    githubLink: 'https://github.com/DanyGuerra/spotistats',
                    projectLink: 'https://topstats-brown.vercel.app/'
                },
                {
                    title: 'RestHub',
                    description: 'Aplicación web para la gestión de negocios. Gestión de pedidos, productos y roles de administración. Tablero Kanban para la gestión de pedidos.',
                    tech: ['Nextjs', 'React', 'TypeScript', "shadcn/ui", "Tailwind CSS", "Zustand", "WebSockets", "Socket.io", "AWS", "MongoDB", "Node.js", "Express", "JWT", "jest"],
                    githubLink: 'https://github.com/DanyGuerra/business-manager-frontend',
                    projectLink: 'https://business-manager-frontend.vercel.app/'
                },
                {
                    title: 'Api RestHub',
                    description: 'Api para la gestión de negocios. Gestión de pedidos, menús, productos y roles de administración.',
                    tech: ['Nestjs', 'TypeScript', "AWS", "PostgreSQL", "JWT"],
                    githubLink: 'https://github.com/DanyGuerra/api-restaurant-manager',
                    projectLink: 'https://business-manager-frontend.vercel.app/'
                },
            ]
        },
        skills: {
            title: 'Habilidades Técnicas',
            categories: {
                "Frontend": ["React", "Next.js", "Angular", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "shadcn/ui", "GSAP", "PrimeNG", "SCSS", "HTML5", "Ant Design", "Zustand", "WebSockets", "Socket.io", "cypress"],
                "Backend": ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "Firebase", "AWS", "Socket.io", "Jest", "JWT", "OAuth"],
                "Herramientas": ["Git", "Docker", "VS Code", "Figma", "Postman", "Jira"]
            }
        },
        contact: {
            number: "05. ¿Qué sigue?",
            title: 'Ponte en Contacto',
            desc: 'Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré lo posible por responderte!',
            btn: 'Contactame',
            socials: {
                github: 'https://github.com/DanyGuerra',
                linkedin: 'https://www.linkedin.com/in/danyguerra/'
            }
        }
    }
};

export const useLanguage = () => {
    const t = computed(() => translations[currentLanguage.value]);

    return {
        currentLanguage,
        setLanguage,
        initLanguage,
        t
    };
};
