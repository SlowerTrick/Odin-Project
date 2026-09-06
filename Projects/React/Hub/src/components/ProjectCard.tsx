import React from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon, CartIcon, DocumentIcon, GamepadIcon, MusicIcon, CheckCircleIcon } from './Icons';
import styles from '../styles/Projects.module.css';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const baseUrl = import.meta.env.BASE_URL;
    const demoUrl = project.isExternal 
        ? (project.externalUrl || project.repoPath) 
        : `${baseUrl}${project.demoPath}`;

    const renderIcon = () => {
        switch (project.iconType) {
            case 'cart':
                return <CartIcon size={22} />;
            case 'cv':
                return <DocumentIcon size={22} />;
            case 'game':
                return <GamepadIcon size={22} />;
            case 'music':
                return <MusicIcon size={22} />;
            default:
                return <DocumentIcon size={22} />;
        }
    };

    return (
        <article className={styles.projectCard}>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitleGroup}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <div className={styles.cardIcon}>
                    {renderIcon()}
                </div>
            </div>

            <p className={styles.projectDesc}>{project.description}</p>

            <div className={styles.highlightsBox}>
                <span className={styles.highlightsLabel}>Key Features & Architecture</span>
                <ul className={styles.highlightsList}>
                    {project.highlights.map((highlight, index) => (
                        <li key={index} className={styles.highlightItem}>
                            <CheckCircleIcon size={14} className={styles.highlightIcon} />
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.techTags}>
                {project.tags.map((tag, index) => (
                    <span key={index} className={styles.techTag}>
                        {tag}
                    </span>
                ))}
            </div>

            <div className={styles.cardActions}>
                <a
                    href={demoUrl}
                    target={project.isExternal ? '_blank' : undefined}
                    rel={project.isExternal ? 'noopener noreferrer' : undefined}
                    className={`btn btnPrimary ${styles.btnDemo}`}
                    title={`Explore ${project.title}`}
                >
                    <span>{project.isExternal ? 'Explore Project' : 'Open Application'}</span>
                    <ExternalLinkIcon size={15} />
                </a>
                <a
                    href={project.repoPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btnSecondary ${styles.btnSource}`}
                    title={`View ${project.title} on GitHub`}
                >
                    <GithubIcon size={15} />
                    <span>Source</span>
                </a>
            </div>
        </article>
    );
};
