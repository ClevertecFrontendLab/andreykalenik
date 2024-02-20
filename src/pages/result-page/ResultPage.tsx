import { Card, Tabs,  Button, Form, Input, Grid, Result } from 'antd';

import React from 'react';
import styles from './ResultPage.module.scss'

import {
    CheckCircleFilled,
    WarningFilled,
    CloseCircleFilled, 
}from '@ant-design/icons';

import { ServiceBackground } from '@components/service background'

type ResultPageProps =  {
    status : 'success' | 'error' | 'error-user-exist' | 'error-login' | 'error-check-email-no-exist' | 'error-check-email' | 'error-change-password' | 'success-change-password'
}

export const ResultPage: React.FC<ResultPageProps> = ({status}) =>{
    return(
        <ServiceBackground>
                {(() => {
                    switch (status) {
                    case 'success':
                        return <Component
                        title='Регистрация успешна'
                        subtitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
                        buttonText='Войти'
                        testID='registration-enter-button'
                        icon={<CheckCircleFilled style={{fontSize:70, color:'#52C41A', display:'block', padding:5}}/>}
                        />
                    case 'error':
                        return <Component
                        title='Данные не сохранились'
                        subtitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
                        buttonText='Повторить'
                        testID='registration-retry-button'
                        icon={<CloseCircleFilled  style={{fontSize:70, color:'#FF4D4F', display:'block', padding:5}}/>}
                        />
                    case 'error-user-exist':
                        return 'error-user-exist' 
                    case 'error-login':
                        return <Component
                        title='Вход не выполнен'
                        subtitle='Что-то пошло не так. Попробуйте еще раз'
                        buttonText='Повторить'
                        testID='login-retry-button'
                        icon={<WarningFilled  style={{fontSize:70, color:'#FAAD14', display:'block', padding:5}}/>}
                        />
                    case 'error-check-email-no-exist':
                        return 'error-check-email-no-exist'
                    case 'error-check-email':
                        return 'error-check-email'
                    case 'error-change-password':
                        return <Component
                        title='Данные не сохранились'
                        subtitle='Что-то пошло не так. Попробуйте ещё раз'
                        buttonText='Повторить'
                        testID='change-retry-button'
                        icon={<CloseCircleFilled  style={{fontSize:70, color:'#FF4D4F', display:'block', padding:5}}/>}
                        />  
                    case 'success-change-password':
                        return <Component
                        title='Пароль успешно изменен'
                        subtitle='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
                        buttonText='Вход'
                        testID='change-entry-button'
                        icon={<CheckCircleFilled style={{fontSize:70, color:'#52C41A', display:'block', padding:5}}/>}
                        />  
                    default:
                        return null
                    }
                })()}
        </ServiceBackground>

    )
}

type ComponentProps={
    title: string,
    subtitle: string,
    buttonText: string,
    testID: string,
    icon: React.ReactNode,
}

const Component:React.FC<ComponentProps> = ({title, subtitle, buttonText, testID, icon }) => {
    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()

    return(
        <Card
            className={styles.card}
            style={sm ? { width: 539, borderRadius: 2 , paddingBlock:64, paddingInline:85.5, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}:
                        { width: 328, borderRadius: 2 , paddingBlock:32, paddingInline:16, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'} }
        >
                <>{icon}</>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            <Button
                 type="primary" 
                 data-test-id={testID}
                 style={{width:'100%', height:40, borderRadius:2, backgroundColor:'#2F54EB'}}
            >
                 {buttonText}
            </Button>
        </Card>
    )
}

