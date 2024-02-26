import React from 'react';
import { useWindowSize } from 'usehooks-ts'
import { Layout } from 'antd'
import { MainLayout } from '@components/main-layout';
import { AppHeader } from '@components/app-header';
import { AppSider } from '@components/app-sider';


import styles from './MainPage.module.scss';



export type DevicesType = {
    isDesktop?: boolean,
    isTablet?: boolean,
    isMobile?: boolean
  }


export const MainPage: React.FC = () => {

    const  screenWidht = useWindowSize().width
    
    const mobileBreakpoint = 576
    const tabletBreakpoint = 992

    const isDesktop =  screenWidht > tabletBreakpoint
    const isTablet =  screenWidht > mobileBreakpoint && screenWidht <= tabletBreakpoint
    const isMobile = screenWidht <= mobileBreakpoint

    
    return (
      <Layout className={styles.mainLayout}>
        <AppSider isMobile={isMobile}/>
        <Layout className={styles.ContentLayout}>
            <AppHeader isDesktop={isDesktop} isTablet={isTablet}/>
            <MainLayout/>
        </Layout>
      </Layout>
    );

};

