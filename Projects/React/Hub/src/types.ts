// Type definitions for portfolio projects and skills

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    highlights: string[];
    tags: string[];
    demoPath: string;
    repoPath: string;
    status: 'Live' | 'Maintained';
    iconType: 'cv' | 'game' | 'cart';
}

export interface SkillCategory {
    title: string;
    description: string;
    skills: string[];
}
