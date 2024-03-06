import { useEffect, useState } from 'react';
import { Card, Tabs, Grid } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { LogoIcon } from '@components/project-icons';
import { ServiceBackground } from '@components/service-background';
import { LoginForm } from '@components/login-form';
import { RegForm } from '@components/reg-form';
import { Path } from '@utils/constants';

import styles from './AuthPage.module.scss';

type ItemsTab = {
    label: string;
    key: string;
    children: React.ReactNode;
};

export const AuthPage: React.FC = () => {
    const { useBreakpoint } = Grid;
    const { sm } = useBreakpoint();
    const [key, setKey] = useState('1');
    const navigate = useNavigate();
    const location = useLocation();

    const itemsTab: ItemsTab[] = [
        {
            label: `Вход`,
            key: '1',
            children: <LoginForm />,
        },
        {
            label: `Регистрация`,
            key: '2',
            children: <RegForm />,
        },
    ];

    useEffect(() => {
        location.pathname === Path.AUTH ? setKey('1') : setKey('2');
    }, [location.pathname]);

    return (
        <ServiceBackground>
            <Card
                className={styles.contentWrapper}
                style={
                    sm
                        ? { width: 539, paddingBlock: 64, paddingInline: 85.5 }
                        : { width: 328, paddingBlock: 31, paddingInline: 16 }
                }
            >
                <LogoIcon
                    style={
                        sm
                            ? { width: 309, height: 76, position: 'relative', left: 29, bottom: 1 }
                            : { width: 203, height: 50, position: 'relative', left: 46 }
                    }
                />

                <Tabs
                    tabBarStyle={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 24,
                    }}
                    className={styles.tabs}
                    size={sm ? 'large' : 'middle'}
                    items={itemsTab}
                    activeKey={key}
                    onChange={(k: string) => {
                        setKey(k);
                        key === '1' ? navigate(Path.REGISTRATION) : navigate(Path.AUTH);
                    }}
                />
            </Card>
        </ServiceBackground>
    );
};
