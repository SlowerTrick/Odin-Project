import React from 'react';
import { LayersIcon, CodeBracketIcon, TerminalIcon, GithubIcon, LinkedinIcon } from './Icons';
import { REPO_BASE_URL, LINKEDIN_URL } from '../data/projects';
import styles from '../styles/Hero.module.css';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className={styles.heroSection}>
            <div className={styles.heroBadge}>
                <span className={styles.badgePulse}></span>
                <span>Computer Science @ UFES · Software Engineering Intern @ LabES</span>
            </div>

            <h1 className={styles.heroTitle}>
                Artur Vítor <span className={styles.heroTitleAccent}>Portfolio</span>
            </h1>

            <p className={styles.heroSubtitle}>
                Computer Science undergraduate at UFES and Software Engineering Intern at LabES. 
                Experienced in enterprise systems (Marvin with Java and Jakarta EE), AI study platforms 
                (Studex with RAG and local LLMs), computer vision (Face Recognition with WebSockets), 
                and modern interactive web applications.
            </p>

            <div className={styles.heroActions}>
                <a href="#projects" className={`btn btnPrimary ${styles.primaryCta}`}>
                    View Projects
                </a>
                <a 
                    href={LINKEDIN_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn btnSecondary ${styles.secondaryCta}`}
                >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                </a>
                <a 
                    href={REPO_BASE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn btnSecondary ${styles.secondaryCta}`}
                >
                    <GithubIcon size={16} />
                    <span>Repository</span>
                </a>
            </div>

            <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                    <LayersIcon size={15} className={styles.metaIcon} />
                    <span>6 Featured Projects</span>
                </span>
                <span className={styles.metaItem}>
                    <CodeBracketIcon size={15} className={styles.metaIcon} />
                    <span>Enterprise, AI & Web</span>
                </span>
                <span className={styles.metaItem}>
                    <TerminalIcon size={15} className={styles.metaIcon} />
                    <span>LabES - UFES Intern</span>
                </span>
            </div>
        </section>
    );
};
