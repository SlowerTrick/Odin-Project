import React from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import commonStyles from '../styles/Common.module.css';
import styles from '../styles/Projects.module.css';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projects">
            <div className={commonStyles.sectionHeader}>
                <span className={commonStyles.sectionEyebrow}>Portfolio</span>
                <h2 className={commonStyles.sectionTitle}>Featured Applications</h2>
                <p className={commonStyles.sectionSubtitle}>
                    Explore the live applications deployed on GitHub Pages, each accompanied by documented source code and architectural highlights.
                </p>
            </div>
            <div className={styles.projectsGrid}>
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
