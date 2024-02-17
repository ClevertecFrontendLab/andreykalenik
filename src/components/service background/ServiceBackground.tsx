import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import styles from './ServiceBackgroun.module.scss'


type ServiceBackgroundProps = {children: ReactNode}

export const ServiceBackground:React.FC<ServiceBackgroundProps> = ({children}) =>{
    return(
        <Layout className={styles.pageWrapper}>
                <div className={styles.contentWrapper}>
                    {children}
                </div>
        </Layout>
    )
}