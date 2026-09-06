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
    iconType: 'cv' | 'game' | 'cart' | 'music';
    isExternal?: boolean;
    externalUrl?: string;
}

export interface SkillCategory {
    title: string;
    description: string;
    skills: string[];
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    location: string;
    type: string;
    description: string;
    highlights: string[];
    skills: string[];
    link?: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    status: string;
    description: string;
    courses: string[];
}
