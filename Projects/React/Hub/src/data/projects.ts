import type { Project, SkillCategory } from '../types';

export const REPO_BASE_URL = 'https://github.com/Artur-SLO/WebDev';

export const PROJECTS: Project[] = [
    {
        id: 'shopping-cart',
        title: 'Shopping Cart',
        category: 'E-Commerce Platform',
        description: 'Comprehensive e-commerce application featuring dynamic product catalog fetching, live shopping cart state management, checkout summary calculations, and React Router navigation.',
        highlights: [
            'Real-time cart state with dynamic quantity controls',
            'Live product catalog fetched from FakeStore API',
            'Full unit and integration test coverage using Vitest',
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
        category: 'Document Builder',
        description: 'Interactive resume generator designed for fast drafting and live previewing. Includes guided step-by-step navigation, real-time edit mode, and browser print/PDF export capability.',
        highlights: [
            'Guided multi-step wizard navigation with stepper',
            'Dual-mode editing: sequential steps and full edit',
            'Native print engine formatted for document export',
        ],
        tags: ['React 19', 'Vite', 'State Management', 'Print API', 'CSS'],
        demoPath: 'CV-Application/',
        repoPath: `${REPO_BASE_URL}/tree/main/Projects/React/CV%20Application`,
        status: 'Live',
        iconType: 'cv',
    },
    {
        id: 'memory-card',
        title: 'Memory Card Game',
        category: 'Interactive Game',
        description: 'Memory challenge game powered by the PokeAPI. Tests player recall by dynamically shuffling cards on every click, tracking high scores and game completion states.',
        highlights: [
            'Dynamic sprite fetching from PokeAPI endpoints',
            'Fisher-Yates shuffling algorithm on every click',
            'Live score tracking and persistent high-score record',
        ],
        tags: ['React 19', 'Vite', 'PokeAPI', 'Algorithms', 'CSS'],
        demoPath: 'Memory-Card/',
        repoPath: `${REPO_BASE_URL}/tree/main/Projects/React/Memory%20Card`,
        status: 'Live',
        iconType: 'game',
    },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Core Fundamentals',
        description: 'Foundations of web standards, layout systems, and semantic architecture.',
        skills: ['HTML5 Semantic Markup', 'CSS3 Architecture', 'Responsive Web Design', 'Flexbox & CSS Grid', 'DOM API Manipulation'],
    },
    {
        title: 'Advanced JavaScript',
        description: 'Modern ECMAScript programming, async patterns, and data manipulation.',
        skills: ['ES6+ Syntax & Modules', 'Async/Await & Promises', 'Closures & Scope', 'Factory Functions', 'API Fetching & Error Handling'],
    },
    {
        title: 'React & TypeScript',
        description: 'Component-driven engineering, hooks, typed state, and routing architectures.',
        skills: ['React 19 Hooks', 'Context & State Management', 'TypeScript Interfaces & Generics', 'React Router SPA', 'Component Lifecycle'],
    },
    {
        title: 'Tooling & Quality',
        description: 'Modern development workflow, build bundlers, and continuous deployment.',
        skills: ['Vite Build Engine', 'Vitest Unit Testing', 'TDD (Test-Driven Development)', 'GitHub Actions CI/CD', 'Git Version Control'],
    },
];
