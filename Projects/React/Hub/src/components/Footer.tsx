import React from 'react';
import { CodeBracketIcon, GithubIcon, ExternalLinkIcon } from './Icons';
import { REPO_BASE_URL } from '../data/projects';
import styles from '../styles/Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerMain}>
                <div className={styles.brandCol}>
                    <div className={styles.brandHeader}>
                        <CodeBracketIcon size={22} className={styles.brandIcon} />
                        <span>WebDev Portfolio</span>
                    </div>
                    <p className={styles.brandText}>
                        A repository documenting personal progress in full-stack and frontend development. 
                        Features complete single-page applications, interactive games, and developer utilities.
                    </p>
                </div>

                <div className={styles.navCol}>
                    <span className={styles.colHeading}>Navigation</span>
                    <ul className={styles.navLinksList}>
                        <li>
                            <a href="#hero" className={styles.footerNavLink}>Home</a>
                        </li>
                        <li>
                            <a href="#projects" className={styles.footerNavLink}>Featured Projects</a>
                        </li>
                        <li>
                            <a href="#competencies" className={styles.footerNavLink}>Core Competencies</a>
                        </li>
                        <li>
                            <a href={REPO_BASE_URL} target="_blank" rel="noopener noreferrer" className={styles.footerNavLink}>
                                <span>GitHub Repository</span>
                                <ExternalLinkIcon size={12} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.stackCol}>
                    <span className={styles.colHeading}>Technology Stack</span>
                    <div className={styles.stackBadges}>
                        <span className={styles.stackBadge}>React 19</span>
                        <span className={styles.stackBadge}>TypeScript</span>
                        <span className={styles.stackBadge}>Vite Engine</span>
                        <span className={styles.stackBadge}>CSS Modules</span>
                        <span className={styles.stackBadge}>GitHub Pages</span>
                        <span className={styles.stackBadge}>CI/CD Actions</span>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.bottomContainer}>
                    <p className={styles.copyrightText}>
                        WebDev Portfolio &middot; Created by Artur Vitor &middot; Open Source
                    </p>
                    <div className={styles.bottomLinks}>
                        <a href="https://github.com/Artur-SLO" target="_blank" rel="noopener noreferrer" className={styles.bottomLink}>
                            <GithubIcon size={14} />
                            <span>Artur-SLO</span>
                        </a>
                        <a href={REPO_BASE_URL} target="_blank" rel="noopener noreferrer" className={styles.bottomLink}>
                            <span>View Source Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
