import React from 'react';
import { PageWrapper } from './components/PageWrapper';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GithubActivitySection } from './components/GithubActivitySection';
import { PillarsSection } from './components/PillarsSection';
import { Footer } from './components/Footer';
import commonStyles from './styles/Common.module.css';

export const App: React.FC = () => {
    return (
        <PageWrapper>
            <Navbar />
            <main className={commonStyles.homeContainer}>
                <Hero />
                <ExperienceSection />
                <ProjectsSection />
                <GithubActivitySection />
                <PillarsSection />
            </main>
            <Footer />
        </PageWrapper>
    );
};

export default App;
