import React from 'react';
import styles from '../styles/Common.module.css';

interface PageWrapperProps {
    children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return <div className={styles.pageWrapper}>{children}</div>;
};
