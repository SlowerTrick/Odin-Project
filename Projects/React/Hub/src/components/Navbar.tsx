import React from 'react';
import { CodeBracketIcon, GithubIcon, LinkedinIcon } from './Icons';
import { REPO_BASE_URL, LINKEDIN_URL } from '../data/projects';
import styles from '../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.navContainer}>
                <a href="#hero" className={styles.brandLink}>
                    <CodeBracketIcon size={20} className={styles.brandIcon} />
                    <span>
                        Artur Vítor <span className={styles.brandAccent}>Portfolio</span>
                    </span>
                </a>

                <nav className={styles.navLinks} aria-label="Main Navigation">
                    <a href="#experience" className={styles.navLink}>Experience</a>
                    <a href="#projects" className={styles.navLink}>Projects</a>
                    <a href="#activity" className={styles.navLink}>GitHub Activity</a>
                    <a href="#competencies" className={styles.navLink}>Competencies</a>
                    <a 
                        href={LINKEDIN_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.navLink}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                        <LinkedinIcon size={14} />
                        <span>LinkedIn</span>
                    </a>
                    <a 
                        href={REPO_BASE_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.repoBtn}
                    >
                        <GithubIcon size={16} />
                        <span>GitHub</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};
