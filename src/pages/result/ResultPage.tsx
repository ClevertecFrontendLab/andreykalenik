import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Grid } from 'antd';
import styles from './ResultPage.module.scss'

import {
    CheckCircleFilled,
    WarningFilled,
    CloseCircleFilled, 
}from '@ant-design/icons';


import { ServiceBackground } from '@components/service-background'
import { ROUTER_PATHS } from '@constants/constants';

type ResultPageProps =  {
    status : 'success' | 'error' | 'error-user-exist' | 'error-login' | 'error-check-email-no-exist' | 'error-check-email' | 'error-change-password' | 'success-change-password'
}
type ComponentProps={
    title: string,
    subtitle: string,
    buttonText: string,
    testID: string,
    redirectPath: ROUTER_PATHS,
    icon: React.ReactNode,
    style: 'defoult' | 'slim',
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
                        redirectPath ={ROUTER_PATHS.AUTH}
                        icon={<CheckCircleFilled style={{fontSize:70, color:'#52C41A', display:'block', padding:5}}/>}
                        style='defoult'
                        />
                    case 'error':
                        return <Component
                        title='Данные не сохранились'
                        subtitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
                        buttonText='Назад к регистрации'
                        testID='registration-retry-button'
                        redirectPath ={ROUTER_PATHS.REGISTRATION}
                        icon={<CloseCircleFilled  style={{fontSize:70, color:'#FF4D4F', display:'block', padding:5}}/>}
                        style='defoult'
                        />
                    case 'error-user-exist':
                        return <Component
                        title='Данные не сохранились'
                        subtitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
                        buttonText='Повторить'
                        testID='registration-back-button'
                        redirectPath ={ROUTER_PATHS.REGISTRATION} // повторный запрос
                        icon={<CloseCircleFilled  style={{fontSize:70, color:'#FF4D4F', display:'block', padding:5}}/>}
                        style='defoult'
                        />
                    case 'error-login':
                        return <Component
                        title='Вход не выполнен'
                        subtitle='Что-то пошло не так. Попробуйте еще раз'
                        buttonText='Повторить'
                        testID='login-retry-button'
                        redirectPath ={ROUTER_PATHS.AUTH}
                        icon={<WarningFilled  style={{fontSize:70, color:'#FAAD14', display:'block', padding:5}}/>}
                        style='defoult'
                        />
                    case 'error-check-email-no-exist':
                        return <Component
                        title='Такой e-mail не зарегистрирован'
                        subtitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
                        buttonText='Попробовать снова'
                        testID='change-retry-button'
                        redirectPath ={ROUTER_PATHS.AUTH}
                        icon={<CloseCircleFilled  style={{fontSize:70, color:'#FF4D4F', display:'block', padding:5}}/>}
                        style='slim'
                        /> 
                    case 'error-check-email':
                        return 'error-check-email'
                    case 'error-change-password':
                        return <Component
                        title='Данные не сохранились'
                        subtitle='Что-то пошло не так. Попробуйте ещё раз'
                        buttonText='Повторить'
                        testID='change-retry-button'
                        redirectPath ={ROUTER_PATHS.REGISTRATION}
                        icon={<CloseCircleFilled  style={{fontSize:70, color:'#FF4D4F', display:'block', padding:5}}/>}
                        style='defoult'
                        />  
                    case 'success-change-password':
                        return <Component
                        title='Пароль успешно изменен'
                        subtitle='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
                        buttonText='Вход'
                        testID='change-entry-button'
                        redirectPath ={ROUTER_PATHS.AUTH}
                        icon={<CheckCircleFilled style={{fontSize:70, color:'#52C41A', display:'block', padding:5}}/>}
                        style='defoult'
                        />  
                    default:
                        return null
                    }
                })()}
        </ServiceBackground>

    )
}




const Component:React.FC<ComponentProps> = ({title, subtitle, buttonText, testID, icon, redirectPath, style }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()

    const styleDefoultDestop:React.CSSProperties = { width: 539, borderRadius: 2 , paddingBlock:64, paddingInline:85.5, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}
    const styleDefoultMobile:React.CSSProperties = { width: 328, borderRadius: 2 , paddingBlock:32, paddingInline:16, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}
    const styleSlimDestop:React.CSSProperties = { width: 539, borderRadius: 2 , paddingBlockStart:64,paddingBlockEnd:56, paddingInline:32, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}
    const styleSlimMobile:React.CSSProperties = { width: 328, borderRadius: 2 , paddingBlockStart:64,paddingBlockEnd:56, paddingInline:32, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}

    useEffect(() => {
        !location.state ? navigate(ROUTER_PATHS.AUTH) : '';
    },[location.state, navigate])
    

    return(
        <Card
            className={styles.card}
            style={style === 'defoult' ? (sm ? styleDefoultDestop : styleDefoultMobile ) : (sm ? styleSlimDestop : styleSlimMobile )}
        >
                <>{icon}</>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            <Button
                 type="primary" 
                 data-test-id={testID}
                block= {true}
                 className={styles.button}
                 style={{ height:40}} 
                 onClick={() => {
                    navigate(".", { replace: true }), 
                    navigate(redirectPath, {state: location.pathname})
                }}
            >
                 {buttonText}
            </Button>
        </Card>
    )
}

// import { useRegistrationMutation } from '@redux/reducers/authApi';
// import { useAppSelector } from '@hooks/typed-react-redux-hooks';
// const email = useAppSelector(state => state.user.email)
// const password = useAppSelector(state => state.user.password)

// const repeatReg = () => reg({ email, password }) 
