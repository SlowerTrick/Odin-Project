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
                <span className={commonStyles.sectionEyebrow}>Trajetória Profissional & Acadêmica</span>
                <h2 className={commonStyles.sectionTitle}>Experiência & Formação</h2>
                <p className={commonStyles.sectionSubtitle}>
                    Atuação prática no desenvolvimento de sistemas corporativos em ambiente universitário, 
                    pesquisa aplicada e sólida base teórica em Ciência da Computação.
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
                                <span>Repositório Marvin (GitLab)</span>
                            </a>
                            <a 
                                href={LINKEDIN_URL} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.linkedInBtn}
                            >
                                <LinkedinIcon size={16} />
                                <span>Perfil LinkedIn</span>
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
                            <span className={styles.skillTag}>Algoritmos & Complexidade</span>
                            <span className={styles.skillTag}>Engenharia de Software</span>
                            <span className={styles.skillTag}>Sistemas Distribuídos</span>
                            <span className={styles.skillTag}>Inteligência Artificial</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recruiter Technical Spotlight */}
            <div className={styles.recruiterSpotlight}>
                <div className={styles.spotlightHeader}>
                    <h4 className={styles.spotlightTitle}>
                        Contexto de Engenharia para Recrutadores
                    </h4>
                    <a 
                        href={LINKEDIN_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.linkedInBtn}
                    >
                        <LinkedinIcon size={14} />
                        <span>Conectar no LinkedIn</span>
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
                            Sistema web corporativo universitário em produção para gestão de ensino e pesquisa, com persistência transacional PostgreSQL e S3 via MinIO.
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
                            Plataforma de estudos com pipeline RAG híbrido (busca vetorial e BM25), extração de PDFs com PyMuPDF e inferência local com LLMs (Llama 3.2 e Qwen).
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
                            Sistema de biometria facial contínua via WebSockets full-duplex de baixa latência, extração de embeddings e conformidade legal com a LGPD.
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
                            Aplicação web interativa de áudio com recorte de som com precisão de milissegundos, autenticação e ranking em nuvem Firestore.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
};
