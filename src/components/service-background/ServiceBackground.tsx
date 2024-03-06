import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import styles from './ServiceBackgroun.module.scss';

export const ServiceBackground: React.FC<{ children: ReactNode }> = ({ children }) => (
    <Layout className={styles.pageWrapper}>
        <div className={styles.contentWrapper}>{children}</div>
    </Layout>
);
