import React from 'react';
import { CodeBracketIcon, GithubIcon, LinkedinIcon, ExternalLinkIcon } from './Icons';
import { REPO_BASE_URL, LINKEDIN_URL } from '../data/projects';
import styles from '../styles/Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerMain}>
                <div className={styles.brandCol}>
                    <div className={styles.brandHeader}>
                        <CodeBracketIcon size={22} className={styles.brandIcon} />
                        <span>Artur Vítor · Portfolio</span>
                    </div>
                    <p className={styles.brandText}>
                        Documenting practical software engineering across enterprise systems (Marvin), 
                        AI & hybrid RAG platforms (Studex), real-time biometrics (Face Recognition), 
                        and modern interactive web applications.
                    </p>
                </div>

                <div className={styles.navCol}>
                    <span className={styles.colHeading}>Navigation</span>
                    <ul className={styles.navLinksList}>
                        <li>
                            <a href="#hero" className={styles.footerNavLink}>Home</a>
                        </li>
                        <li>
                            <a href="#experience" className={styles.footerNavLink}>Experience & Education</a>
                        </li>
                        <li>
                            <a href="#projects" className={styles.footerNavLink}>Featured Projects</a>
                        </li>
                        <li>
                            <a href="#activity" className={styles.footerNavLink}>GitHub Activity</a>
                        </li>
                        <li>
                            <a href="#competencies" className={styles.footerNavLink}>Core Competencies</a>
                        </li>
                        <li>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.footerNavLink}>
                                <span>LinkedIn Profile</span>
                                <ExternalLinkIcon size={12} />
                            </a>
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
                        <span className={styles.stackBadge}>Java & Jakarta EE</span>
                        <span className={styles.stackBadge}>WildFly Server</span>
                        <span className={styles.stackBadge}>PostgreSQL</span>
                        <span className={styles.stackBadge}>MinIO (S3 API)</span>
                        <span className={styles.stackBadge}>Python & Flask</span>
                        <span className={styles.stackBadge}>Qdrant Vector DB</span>
                        <span className={styles.stackBadge}>Ollama & RAG</span>
                        <span className={styles.stackBadge}>OpenCV & WebSockets</span>
                        <span className={styles.stackBadge}>React 19 & TypeScript</span>
                        <span className={styles.stackBadge}>Docker & Compose</span>
                        <span className={styles.stackBadge}>GitHub Actions CI/CD</span>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.bottomContainer}>
                    <p className={styles.copyrightText}>
                        Artur Vítor &middot; Computer Science @ UFES &middot; Software Engineering Intern @ LabES
                    </p>
                    <div className={styles.bottomLinks}>
                        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.bottomLink}>
                            <LinkedinIcon size={14} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/Artur-SLO" target="_blank" rel="noopener noreferrer" className={styles.bottomLink}>
                            <GithubIcon size={14} />
                            <span>Artur-SLO</span>
                        </a>
                        <a href={REPO_BASE_URL} target="_blank" rel="noopener noreferrer" className={styles.bottomLink}>
                            <span>Repository</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
