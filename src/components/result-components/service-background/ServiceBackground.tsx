import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import styles from './ServiceBackgroun.module.scss';
import { AppLoader } from '@components/app-loader';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectLoadingMutation, selectLoadingQuery } from '@utils/selectors';

export const ServiceBackground: React.FC<{ children: ReactNode }> = ({ children }) => {
    const isLoadingMutation = useAppSelector(selectLoadingMutation);
    const isLoadingQuery = useAppSelector(selectLoadingQuery);
    return (
        <>
            {(isLoadingMutation || isLoadingQuery) && <AppLoader />}
            <Layout className={styles.pageWrapper}>
                <div className={styles.contentWrapper}>{children}</div>
            </Layout>
        </>
    );
};
