import { Card, Tabs, Grid } from 'antd';
import React from 'react';
import styles from './AuthPage.module.scss'
import { LogoIcon } from '@components/project-icons'
import { ServiceBackground } from '@components/service-background'
import { LoginForm } from '@components/login-form'; 
import { RegForm } from '@components/reg-form';



export const AuthPage:React.FC = () =>{

    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()

    return(
        <ServiceBackground>
            <Card 
                className={styles.contentWrapper} 
                style={sm ? { width: 539, paddingBlock:64, paddingInline:85.5}:
                            { width: 328, paddingBlock:31, paddingInline:16} }
                >   
                    <LogoIcon style={sm ? {width:309, height:76, position:'relative', left:29, bottom:1 } : 
                                            {width:203, height:50, position:'relative', left:46}}/>

                        <Tabs 
                            tabBarStyle={{display:'flex', justifyContent:'space-between', marginBottom:24}}
                            className={styles.tabs}
                            size={sm ? 'large' :'middle'}
                            defaultActiveKey="1" 
                            items={[
                            {
                                label: `Вход`,
                                key: '1',
                                children: <LoginForm/>,

                            },
                            {
                                label: `Регистрация`,
                                key: '2',
                                children: <RegForm/>,
                            },
                            ]}
                        />
            </Card>
      </ServiceBackground>
    )
}