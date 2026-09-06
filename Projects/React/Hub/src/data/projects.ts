import type { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const REPO_BASE_URL = 'https://github.com/Artur-SLO/WebDev';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/artur-v%C3%ADtor-a7a375401/';
export const GITHUB_PROFILE_URL = 'https://github.com/Artur-SLO';
export const MARVIN_REPO_URL = 'https://gitlab.labes.inf.ufes.br/marvin/marvin';
export const STUDEX_REPO_URL = 'https://github.com/lewislf/studex';
export const FACE_RECOG_REPO_URL = 'https://github.com/FeLiPeOLi7/FaceRecognitionApp/tree/main';
export const DELTASONG_REPO_URL = 'https://github.com/Artur-SLO/Deltasong';

export const USER_PROFILE = {
    name: 'Artur Vítor',
    role: 'Estudante de Ciência da Computação @ UFES · Desenvolvedor Web @ LabES',
    headline: 'Computer Science Undergraduate & Full-Stack / Backend Developer',
    location: 'Vitória, Espírito Santo, Brasil',
    linkedin: LINKEDIN_URL,
    github: GITHUB_PROFILE_URL,
    summary: 'Estudante de Ciência da Computação na Universidade Federal do Espírito Santo (UFES) e Desenvolvedor Web no Laboratório de Engenharia de Software (LabES - UFES). Experiência prática na construção de sistemas corporativos de alta escala (Marvin em Java/Jakarta EE), plataformas de IA com pipelines RAG e LLMs locais (Studex), sistemas biométricos em tempo real com conformidade LGPD (Face Recognition) e aplicações web modernas.',
};

export const EXPERIENCES: ExperienceItem[] = [
    {
        role: 'Desenvolvedor Web (Aprendiz)',
        company: 'LabES - UFES',
        period: 'mai de 2026 - o momento · 5 meses',
        location: 'Vitória, Espírito Santo, Brasil · No local',
        type: 'Aprendiz',
        description: 'Desenvolvimento e evolução do Marvin, sistema web universitário para gerenciamento integral de atividades de ensino, pesquisa e extensão acadêmica na UFES.',
        highlights: [
            'Arquitetura corporativa em Java e Jakarta EE executada sobre o servidor de aplicações WildFly',
            'Modelagem e persistência relacional transacional com PostgreSQL e migrações de dados',
            'Gestão e armazenamento de arquivos e documentos de pesquisa via MinIO com API compatível com AWS S3',
            'Automação de ciclo de vida com Apache Maven e orquestração de containers com Docker',
            'Práticas de versionamento e colaboração em equipe técnica utilizando Git e GitLab',
        ],
        skills: ['Java', 'Jakarta EE', 'WildFly', 'PostgreSQL', 'Maven', 'MinIO (S3 API)', 'Git', 'Docker'],
        link: MARVIN_REPO_URL,
    },
];

export const EDUCATION: EducationItem[] = [
    {
        degree: 'Bacharelado em Ciência da Computação',
        institution: 'Universidade Federal do Espírito Santo (UFES)',
        location: 'Vitória, Espírito Santo, Brasil',
        status: 'Em andamento',
        description: 'Formação superior com sólida base em arquitetura de computadores, análise de complexidade de algoritmos, engenharia de software e inteligência artificial.',
        courses: ['Estruturas de Dados e Algoritmos', 'Engenharia de Software', 'Banco de Dados', 'Sistemas Operacionais', 'Inteligência Artificial'],
    },
];

export const PROJECTS: Project[] = [
    {
        id: 'marvin',
        title: 'Marvin (LabES - UFES)',
        category: 'Enterprise Academic Management System',
        description: 'Sistema web corporativo para gestão integrada de atividades de ensino e pesquisa em ambiente universitário, desenvolvido no Laboratório de Engenharia de Software (LabES - UFES).',
        highlights: [
            'Arquitetura corporativa robusta em Java e Jakarta EE com servidor WildFly',
            'Armazenamento e gestão de objetos acadêmicos via MinIO com API S3/AWS',
            'Persistência em PostgreSQL conteinerizado com orquestração Docker e build Maven',
            'Projetado para alta confiabilidade transacional e integridade de dados acadêmicos',
        ],
        tags: ['Java', 'Jakarta EE', 'WildFly', 'PostgreSQL', 'MinIO (S3 API)', 'Docker', 'Maven'],
        demoPath: '',
        repoPath: MARVIN_REPO_URL,
        status: 'Maintained',
        iconType: 'cv',
        isExternal: true,
        externalUrl: MARVIN_REPO_URL,
    },
    {
        id: 'studex',
        title: 'Studex',
        category: 'AI Study Platform & Hybrid RAG',
        description: 'Plataforma educacional com gamificação que converte documentos didáticos (PDFs) em resumos inteligentes, flashcards interativos e mapas mentais utilizando modelos de linguagem locais e busca vetorial híbrida.',
        highlights: [
            'Pipeline RAG híbrido com busca vetorial (Qdrant) combinada com busca lexical (BM25) e Cohere Rerank',
            'Orquestração de LLMs locais via Ollama (suportando Llama 3.2, Qwen e Phi-3.5)',
            'Processamento e extração de texto de documentos com PyMuPDF e backend em Flask',
            'Arquitetura multi-serviços automatizada com Docker Compose e frontend reativo em React e Mantine UI',
        ],
        tags: ['Python', 'Flask', 'React', 'Ollama (Llama 3.2)', 'Qdrant', 'Mantine', 'PyMuPDF', 'Docker'],
        demoPath: '',
        repoPath: STUDEX_REPO_URL,
        status: 'Live',
        iconType: 'cv',
        isExternal: true,
        externalUrl: STUDEX_REPO_URL,
    },
    {
        id: 'face-recognition',
        title: 'Face Recognition Web App',
        category: 'Computer Vision & Real-Time Biometrics',
        description: 'Sistema web desacoplado para cadastro biométrico e reconhecimento facial contínuo de alta performance, com streaming bidirecional de frames e estrita conformidade com a LGPD.',
        highlights: [
            'Streaming full-duplex de vídeo em tempo real via WebSockets (Flask-SocketIO e sockets nativos)',
            'Extração de vetores biométricos (embeddings) via dlib e processamento com OpenCV',
            'Mecanismo de consentimento explícito e proteção de dados biométricos conforme a LGPD',
            'Interface componentizada em React (Vite) com captura via HTML5 Canvas e isolamento CSS Modules',
        ],
        tags: ['Python', 'Flask', 'OpenCV', 'dlib', 'WebSockets', 'React', 'Vite', 'LGPD'],
        demoPath: '',
        repoPath: FACE_RECOG_REPO_URL,
        status: 'Live',
        iconType: 'game',
        isExternal: true,
        externalUrl: FACE_RECOG_REPO_URL,
    },
    {
        id: 'deltasong',
        title: 'Deltasong',
        category: 'Full-Stack Audio Trivia Game',
        description: 'Jogo web interativo focado em dedução, trivia musical e desafios diários da trilha sonora de DELTARUNE, com pontuações globais e autenticação em nuvem.',
        highlights: [
            'Algoritmo customizado para amostragem e corte dinâmico de áudio com precisão de milissegundos',
            'Persistência e autenticação em nuvem via Firebase Firestore com regras de segurança',
            'Interface imersiva inspirada no Dark World desenvolvida com Mantine UI v9 e React 19',
            'Pipeline de dados e automação de faixas musicais com scripts Python',
        ],
        tags: ['React 19', 'Firebase Firestore', 'Mantine UI', 'React Router', 'Python'],
        demoPath: '',
        repoPath: `${GITHUB_PROFILE_URL}/Deltasong`,
        status: 'Live',
        iconType: 'music',
        isExternal: true,
        externalUrl: `${GITHUB_PROFILE_URL}/Deltasong`,
    },
    {
        id: 'shopping-cart',
        title: 'Shopping Cart',
        category: 'E-Commerce Platform',
        description: 'Aplicação completa de comércio eletrônico com catálogo dinâmico de produtos, controle de estado global de compras, checkout em tempo real e suíte de testes unitários com Vitest.',
        highlights: [
            'Gerenciamento reativo de estado de carrinho com controle de quantidade e remoção',
            'Consumo assíncrono de catálogo da FakeStore API com tratamento de erros',
            'Suíte abrangente de testes unitários e de integração utilizando Vitest',
        ],
        tags: ['React 19', 'React Router', 'Vitest', 'FakeStore API', 'CSS'],
        demoPath: 'Shopping-Cart/',
        repoPath: `${REPO_BASE_URL}/tree/main/Projects/React/Shopping-Cart`,
        status: 'Live',
        iconType: 'cart',
    },
    {
        id: 'cv-application',
        title: 'CV Application',
        category: 'Document & Resume Generator',
        description: 'Gerador interativo de currículos profissionais com fluxo passo a passo guiado, modo de edição rápida e estilização otimizada para impressão física e exportação em PDF.',
        highlights: [
            'Assistente sequencial com indicador de progresso (stepper) e alternância para edição total',
            'Mecanismo print CSS responsivo eliminando elementos de navegação na exportação',
            'Gerenciamento centralizado de estado para dados pessoais, educacionais e de experiência',
        ],
        tags: ['React 19', 'Vite', 'State Management', 'Print API', 'CSS'],
        demoPath: 'CV-Application/',
        repoPath: `${REPO_BASE_URL}/tree/main/Projects/React/CV%20Application`,
        status: 'Live',
        iconType: 'cv',
    },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Backend & Enterprise Systems',
        description: 'Desenvolvimento corporativo robusto, servidores de aplicação, bancos relacionais e APIs.',
        skills: ['Java & Jakarta EE', 'WildFly Application Server', 'Python & Flask', 'PostgreSQL', 'MinIO (S3 API)', 'REST & WebSockets APIs'],
    },
    {
        title: 'Artificial Intelligence & Computer Vision',
        description: 'Pipelines RAG, bancos vetoriais, orquestração de LLMs locais e visão computacional.',
        skills: ['RAG Híbrido (Vetorial + BM25)', 'Qdrant Vector DB', 'Ollama (Llama 3.2, Qwen)', 'OpenCV & dlib', 'PyMuPDF & Document Processing'],
    },
    {
        title: 'Modern Frontend Engineering',
        description: 'Arquitetura de componentes, tipagem estática, gerenciamento reativo e ecossistema moderno.',
        skills: ['React 19 & Custom Hooks', 'TypeScript', 'Mantine UI & CSS Modules', 'React Router SPA', 'Vite Bundler', 'HTML5 Canvas & Web APIs'],
    },
    {
        title: 'DevOps & Quality Assurance',
        description: 'Conteinerização, esteiras de CI/CD automatizadas e metodologias de teste de software.',
        skills: ['Docker & Docker Compose', 'Git & GitHub Workflows', 'Vitest & PyTest', 'TDD (Test-Driven Development)', 'GitHub Actions CI/CD'],
    },
];
