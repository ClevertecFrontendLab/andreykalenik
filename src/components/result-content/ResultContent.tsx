import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Grid, Result  } from 'antd';
import { CardAuth } from '@components/card-auth';

import { ROUTER_PATHS } from '@utils/constants';

import styles from './ResultContent.module.scss'

type ResultContentProps={
    title: string,
    subtitle: string,
    buttonText: string,
    testID: string,
    redirectPath: ROUTER_PATHS,
    icon: React.ReactNode,
    style: 'default' | 'slim',
}

export const ResultContent:React.FC<ResultContentProps> = ({title, subtitle, buttonText, testID, icon, redirectPath, style }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { useBreakpoint } = Grid;
    const {sm} = useBreakpoint()

    const styledefaultDestop:React.CSSProperties = { width: 539, borderRadius: 2 , paddingBlock:64, paddingInline:85.5, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}
    const styledefaultMobile:React.CSSProperties = { width: 328, borderRadius: 2 , paddingBlock:32, paddingInline:16, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}
    const styleSlimDestop:React.CSSProperties = { width: 539, borderRadius: 2 , paddingBlockStart:64,paddingBlockEnd:56, paddingInline:32, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}
    const styleSlimMobile:React.CSSProperties = { width: 328, borderRadius: 2 , paddingBlockStart:64,paddingBlockEnd:56, paddingInline:32, border:'none', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}

    useEffect(() => {
        !location.state ? navigate(ROUTER_PATHS.AUTH) : '';
    },[location.state, navigate])
    
    return(
        <Card
            className={styles.card}
            style={style === 'default' ? (sm ? styledefaultDestop : styledefaultMobile ) : (sm ? styleSlimDestop : styleSlimMobile )}
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

export const ResultContent500:React.FC = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <CardAuth 
        >
            <Result
                status="500"
                title='Что-то пошло не так'
                subTitle="Произошла ошибка, попробуйте отправить форму ещё раз."
                extra={
                    <Button 
                        type="primary" 
                        data-test-id='check-back-button'
                        onClick={() => {
                            navigate(".", { replace: true }), 
                            navigate(ROUTER_PATHS.AUTH, {state: location.pathname})
                        }} 
                        style={{height:40}}
                        >
                            Назад
                        </Button>}
            />
            
        </CardAuth>    
    )
}