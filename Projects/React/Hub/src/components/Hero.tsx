import React from 'react';
import { LayersIcon, CodeBracketIcon, TerminalIcon, GithubIcon } from './Icons';
import { REPO_BASE_URL } from '../data/projects';
import styles from '../styles/Hero.module.css';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className={styles.heroSection}>
            <div className={styles.heroBadge}>
                <span className={styles.badgePulse}></span>
                <span>Frontend Engineering & Interactive Applications</span>
            </div>

            <h1 className={styles.heroTitle}>
                Web Development <span className={styles.heroTitleAccent}>Portfolio</span>
            </h1>

            <p className={styles.heroSubtitle}>
                A hands-on collection of frontend applications documenting practical mastery of 
                React 19, TypeScript, state management, asynchronous APIs, and automated CI/CD deployments.
            </p>

            <div className={styles.heroActions}>
                <a href="#projects" className={`btn btnPrimary ${styles.primaryCta}`}>
                    View Projects
                </a>
                <a 
                    href={REPO_BASE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn btnSecondary ${styles.secondaryCta}`}
                >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                </a>
            </div>

            <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                    <LayersIcon size={15} className={styles.metaIcon} />
                    <span>3 Featured Apps</span>
                </span>
                <span className={styles.metaItem}>
                    <CodeBracketIcon size={15} className={styles.metaIcon} />
                    <span>React 19 & TypeScript</span>
                </span>
                <span className={styles.metaItem}>
                    <TerminalIcon size={15} className={styles.metaIcon} />
                    <span>GitHub Actions CI/CD</span>
                </span>
            </div>
        </section>
    );
};
