import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '@components/app-header';
import { AppSider } from '@components/app-sider';

import styles from './MainPage.module.scss';

export const MainPage: React.FC = () => (
    <Layout className={styles.mainLayout}>
        <AppSider />
        <Layout className={styles.ContentLayout}>
            <AppHeader />
            <Outlet />
        </Layout>
    </Layout>
);
