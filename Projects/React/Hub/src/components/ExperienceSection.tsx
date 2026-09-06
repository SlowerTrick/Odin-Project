import React from 'react';
import { 
    EXPERIENCES, 
    EDUCATION, 
    LINKEDIN_URL, 
    MARVIN_REPO_URL, 
    STUDEX_REPO_URL, 
    FACE_RECOG_REPO_URL, 
    DELTASONG_REPO_URL 
} from '../data/projects';
import { 
    BriefcaseIcon, 
    AcademicCapIcon, 
    CheckCircleIcon, 
    LinkedinIcon, 
    ExternalLinkIcon 
} from './Icons';
import commonStyles from '../styles/Common.module.css';
import styles from '../styles/Experience.module.css';

export const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className={styles.experienceSection}>
            <div className={commonStyles.sectionHeader}>
                <span className={commonStyles.sectionEyebrow}>Career & Academic Journey</span>
                <h2 className={commonStyles.sectionTitle}>Experience & Education</h2>
                <p className={commonStyles.sectionSubtitle}>
                    Hands-on engineering in enterprise university systems, applied research, 
                    and rigorous theoretical foundations in Computer Science.
                </p>
            </div>

            <div className={styles.experienceGrid}>
                {/* Professional Experience */}
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <BriefcaseIcon size={24} />
                            </div>
                            <div className={styles.headerInfo}>
                                <h3 className={styles.cardRole}>{exp.role}</h3>
                                <span className={styles.cardCompany}>{exp.company}</span>
                            </div>
                        </div>

                        <div className={styles.badgeRow}>
                            <span className={styles.periodBadge}>{exp.period}</span>
                            <span className={styles.locationBadge}>{exp.location}</span>
                        </div>

                        <p className={styles.cardDescription}>{exp.description}</p>

                        <ul className={styles.highlightsList}>
                            {exp.highlights.map((item, hIdx) => (
                                <li key={hIdx} className={styles.highlightItem}>
                                    <CheckCircleIcon size={16} className={styles.checkIcon} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.skillsContainer}>
                            {exp.skills.map((skill, sIdx) => (
                                <span key={sIdx} className={styles.skillTag}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className={styles.cardAction} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <a 
                                href={MARVIN_REPO_URL} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.linkedInBtn}
                            >
                                <ExternalLinkIcon size={16} />
                                <span>Marvin Repository (GitLab)</span>
                            </a>
                            <a 
                                href={LINKEDIN_URL} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.linkedInBtn}
                            >
                                <LinkedinIcon size={16} />
                                <span>LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>
                ))}

                {/* Academic Education */}
                {EDUCATION.map((edu, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <AcademicCapIcon size={24} />
                            </div>
                            <div className={styles.headerInfo}>
                                <h3 className={styles.cardRole}>{edu.degree}</h3>
                                <span className={styles.cardCompany}>{edu.institution}</span>
                            </div>
                        </div>

                        <div className={styles.badgeRow}>
                            <span className={styles.periodBadge}>{edu.status}</span>
                            <span className={styles.locationBadge}>{edu.location}</span>
                        </div>

                        <p className={styles.cardDescription}>{edu.description}</p>

                        <ul className={styles.highlightsList}>
                            {edu.courses.map((course, cIdx) => (
                                <li key={cIdx} className={styles.highlightItem}>
                                    <CheckCircleIcon size={16} className={styles.checkIcon} />
                                    <span>{course}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.skillsContainer}>
                            <span className={styles.skillTag}>Data Structures & Algorithms</span>
                            <span className={styles.skillTag}>Software Engineering</span>
                            <span className={styles.skillTag}>Distributed Systems</span>
                            <span className={styles.skillTag}>Artificial Intelligence</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Systems Architecture Spotlight */}
            <div className={styles.recruiterSpotlight}>
                <div className={styles.spotlightHeader}>
                    <h4 className={styles.spotlightTitle}>
                        Core Systems & Engineering Highlights
                    </h4>
                    <a 
                        href={LINKEDIN_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.linkedInBtn}
                    >
                        <LinkedinIcon size={14} />
                        <span>LinkedIn Network</span>
                    </a>
                </div>

                <div className={styles.spotlightGrid}>
                    <a 
                        href={MARVIN_REPO_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.spotlightCard}
                    >
                        <div className={styles.spotlightCardTop}>
                            <h5 className={styles.spotlightProjectTitle}>Marvin (LabES - UFES)</h5>
                            <ExternalLinkIcon size={14} className={styles.spotlightLinkIcon} />
                        </div>
                        <span className={styles.spotlightProjectTech}>Java · Jakarta EE · WildFly · MinIO</span>
                        <p className={styles.spotlightProjectDesc}>
                            Production university management system for teaching and research with transactional PostgreSQL persistence and S3 object storage via MinIO.
                        </p>
                    </a>

                    <a 
                        href={STUDEX_REPO_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.spotlightCard}
                    >
                        <div className={styles.spotlightCardTop}>
                            <h5 className={styles.spotlightProjectTitle}>Studex</h5>
                            <ExternalLinkIcon size={14} className={styles.spotlightLinkIcon} />
                        </div>
                        <span className={styles.spotlightProjectTech}>Python · Flask · Qdrant · Ollama</span>
                        <p className={styles.spotlightProjectDesc}>
                            AI study platform with hybrid RAG (vector + BM25 search), PyMuPDF document extraction, and local LLM inference (Llama 3.2 and Qwen).
                        </p>
                    </a>

                    <a 
                        href={FACE_RECOG_REPO_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.spotlightCard}
                    >
                        <div className={styles.spotlightCardTop}>
                            <h5 className={styles.spotlightProjectTitle}>Face Recognition</h5>
                            <ExternalLinkIcon size={14} className={styles.spotlightLinkIcon} />
                        </div>
                        <span className={styles.spotlightProjectTech}>OpenCV · dlib · WebSockets · React</span>
                        <p className={styles.spotlightProjectDesc}>
                            Continuous real-time facial biometrics streaming via full-duplex WebSockets with dlib embeddings and strict LGPD compliance.
                        </p>
                    </a>

                    <a 
                        href={DELTASONG_REPO_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.spotlightCard}
                    >
                        <div className={styles.spotlightCardTop}>
                            <h5 className={styles.spotlightProjectTitle}>Deltasong</h5>
                            <ExternalLinkIcon size={14} className={styles.spotlightLinkIcon} />
                        </div>
                        <span className={styles.spotlightProjectTech}>React 19 · Firebase · Mantine UI</span>
                        <p className={styles.spotlightProjectDesc}>
                            Interactive full-stack audio game with millisecond snippet slicing, Firebase Firestore authentication, and real-time leaderboards.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
};
