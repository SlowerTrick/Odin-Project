import type { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const REPO_BASE_URL = 'https://github.com/Artur-SLO/WebDev';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/artur-v%C3%ADtor-a7a375401/';
export const GITHUB_PROFILE_URL = 'https://github.com/Artur-SLO';
export const MARVIN_REPO_URL = 'https://gitlab.labes.inf.ufes.br/marvin/marvin';
export const STUDEX_REPO_URL = 'https://github.com/lewislf/studex';
export const FACE_RECOG_REPO_URL = 'https://github.com/FeLiPeOLi7/FaceRecognitionApp/tree/main';
export const DELTASONG_REPO_URL = 'https://github.com/Artur-SLO/Deltasong';
export const DELTASONG_LIVE_URL = 'https://artur-slo.github.io/Deltasong/';

export const USER_PROFILE = {
    name: 'Artur Vítor',
    role: 'Computer Science Undergraduate @ UFES · Software Engineering Intern @ LabES',
    headline: 'Computer Science Undergraduate & Software Developer',
    location: 'Vitória, Espírito Santo, Brazil',
    linkedin: LINKEDIN_URL,
    github: GITHUB_PROFILE_URL,
    summary: 'Computer Science undergraduate student at Universidade Federal do Espírito Santo (UFES) and Software Engineering Intern at the Software Engineering Laboratory (LabES - UFES). Practical experience building enterprise systems (Marvin in Java/Jakarta EE), AI platforms with RAG pipelines and local LLMs (Studex), real-time biometric systems with LGPD compliance (Face Recognition), and modern responsive web applications.',
};

export const EXPERIENCES: ExperienceItem[] = [
    {
        role: 'Software Engineering Intern',
        company: 'LabES - UFES',
        period: 'May 2026 – Present · 5 mos',
        location: 'Vitória, Espírito Santo, Brazil · On-site',
        type: 'Internship / Scholarship',
        description: 'Development and maintenance of Marvin, an enterprise university web management system for academic, research, and teaching workflows at UFES.',
        highlights: [
            'Enterprise architecture built with Java and Jakarta EE running on WildFly application server',
            'Transactional relational modeling and persistence with PostgreSQL and structured migrations',
            'Academic file and document storage management via MinIO with AWS S3-compatible API',
            'Build lifecycle automation with Apache Maven and container orchestration using Docker',
            'Collaborative version control and peer code reviews utilizing Git and GitLab',
        ],
        skills: ['Java', 'Jakarta EE', 'WildFly', 'PostgreSQL', 'Maven', 'MinIO (S3 API)', 'Git', 'Docker'],
        link: MARVIN_REPO_URL,
    },
];

export const EDUCATION: EducationItem[] = [
    {
        degree: 'B.S. in Computer Science (Undergraduate)',
        institution: 'Universidade Federal do Espírito Santo (UFES)',
        location: 'Vitória, Espírito Santo, Brazil',
        status: 'In Progress',
        description: 'Rigorous academic curriculum with focus on computer systems architecture, algorithm complexity analysis, software engineering, distributed systems, and artificial intelligence.',
        courses: ['Data Structures & Algorithms', 'Software Engineering & Design Patterns', 'Database Systems', 'Operating Systems & Networks', 'Artificial Intelligence'],
    },
];

export const PROJECTS: Project[] = [
    {
        id: 'marvin',
        title: 'Marvin (LabES - UFES)',
        category: 'Enterprise Academic Management System',
        description: 'Comprehensive enterprise web system for university academic, teaching, and research management, developed at the Software Engineering Laboratory (LabES - UFES).',
        highlights: [
            'Enterprise architecture built on Java, Jakarta EE, and WildFly application server',
            'Academic artifact and document management using MinIO with AWS S3-compatible API',
            'Containerized PostgreSQL persistence with Docker orchestration and Maven build lifecycle',
            'Engineered for high transactional reliability and academic data integrity',
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
        description: 'Gamified educational platform converting study materials (PDFs) into structured summaries, interactive flashcards, and mind maps using local language models and hybrid vector search.',
        highlights: [
            'Hybrid RAG pipeline combining Qdrant vector search, BM25 lexical search, and Cohere Rerank',
            'Local LLM inference orchestration via Ollama (supporting Llama 3.2, Qwen, and Phi-3.5)',
            'Document extraction and text processing using PyMuPDF with a Flask backend',
            'Multi-service architecture orchestrated with Docker Compose and reactive React / Mantine UI frontend',
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
        description: 'Decoupled web system for real-time facial recognition and biometric enrollment with low latency full-duplex video streaming and strict LGPD compliance.',
        highlights: [
            'Full-duplex real-time video frame streaming via WebSockets (Flask-SocketIO and native sockets)',
            'Facial feature extraction and ground-truth vector matching using dlib and OpenCV',
            'Explicit user consent validation and biometric data protection adhering to LGPD standards',
            'Componentized React (Vite) interface with HTML5 Canvas capture and CSS Modules isolation',
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
        description: 'Interactive audio deduction and musical trivia web game based on DELTARUNE soundtrack, featuring cloud-synced global leaderboards and user authentication.',
        highlights: [
            'Custom algorithm for dynamic millisecond-precision audio snippet slicing and challenge generation',
            'Cloud persistence and authentication with Firebase Firestore security rules',
            'Immersive Dark World UI crafted with Mantine UI v9, React Router, and React 19',
            'Audio data processing and track automation powered by Python scripts',
        ],
        tags: ['React 19', 'Firebase Firestore', 'Mantine UI', 'React Router', 'Python'],
        demoPath: DELTASONG_LIVE_URL,
        repoPath: DELTASONG_REPO_URL,
        status: 'Live',
        iconType: 'music',
        isExternal: true,
        externalUrl: DELTASONG_LIVE_URL,
    },
    {
        id: 'shopping-cart',
        title: 'Shopping Cart',
        category: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform featuring dynamic product fetching, global cart state management, checkout summary calculations, and comprehensive Vitest unit tests.',
        highlights: [
            'Reactive cart state management with real-time quantity adjustments and item removals',
            'Asynchronous catalog fetching from FakeStore API with robust loading and error states',
            'Complete unit and integration test coverage using Vitest and React Testing Library',
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
        description: 'Interactive curriculum vitae generator featuring step-by-step wizard navigation, instant edit mode, and responsive print engine tailored for PDF export.',
        highlights: [
            'Sequential wizard with interactive stepper progress bar and full-screen edit mode',
            'Responsive print CSS engine removing navigation and toolbar elements during export',
            'Centralized form state management for personal, educational, and experience details',
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
        title: 'Enterprise Backend & Systems',
        description: 'Production-grade enterprise architectures, application servers, relational modeling, and object storage.',
        skills: [
            'Java & Jakarta EE',
            'WildFly Application Server',
            'PostgreSQL & Schema Migrations',
            'MinIO (AWS S3-compatible API)',
            'Apache Maven Build Tooling',
            'Python & Flask Microservices',
            'WebSockets & REST APIs',
        ],
    },
    {
        title: 'AI, RAG & Computer Vision',
        description: 'Retrieval-Augmented Generation pipelines, vector databases, local LLM orchestration, and real-time biometrics.',
        skills: [
            'Hybrid RAG (Vector + BM25 Lexical)',
            'Qdrant Vector Database',
            'Ollama (Llama 3.2, Qwen, Phi-3.5)',
            'PyMuPDF Document Extraction',
            'OpenCV & dlib Biometric Embeddings',
            'Full-Duplex Frame Streaming',
            'LGPD Compliance & Data Privacy',
        ],
    },
    {
        title: 'Modern Frontend Engineering',
        description: 'Component-driven reactive architectures, static typing, state management, and rich interactive media.',
        skills: [
            'React 19 & Custom Hooks',
            'TypeScript Interfaces & Generics',
            'Mantine UI v9 & CSS Modules',
            'React Router SPA Architecture',
            'Firebase Firestore & Cloud Auth',
            'HTML5 Canvas & Web Audio API',
            'Responsive UI & Accessibility',
        ],
    },
    {
        title: 'DevOps & Quality Assurance',
        description: 'Containerization, automated continuous delivery, software test automation, and developer workflows.',
        skills: [
            'Docker & Docker Compose',
            'GitHub Actions CI/CD Workflows',
            'Vitest & Jest Unit Testing',
            'PyTest Python Testing Suite',
            'Test-Driven Development (TDD)',
            'Git, GitHub & GitLab Collaboration',
            'Vite Engine & Modern Toolchains',
        ],
    },
    {
        title: 'Computer Science Foundations',
        description: 'Rigorous theoretical foundations in core data structures, graph algorithms, and clean software architecture.',
        skills: [
            'Data Structures (Trees, Graphs, HashMaps)',
            'Algorithms (BFS, DFS, Dijkstra, Sorting)',
            'Asymptotic Complexity (Big-O Analysis)',
            'Object-Oriented Analysis & Design',
            'Modular Systems & Clean Architecture',
        ],
    },
];
