import { useState } from 'react';
import {
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Button, Grid } from 'antd';

import { CalendarIcon, ExitIcon, LogoIcon, LogoSmallIcon } from '@components/project-icons';
import { Colors } from '@utils/colors';

import styles from './AppSider.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { Path } from '@utils/constants';

const menuItems: MenuProps['items'] = [
    {
        label: 'Календарь',
        key: Path.CALENDARE,
        icon: <CalendarIcon style={{ color: `${Colors.primary_light_9}` }} />,
    },
    {
        label: 'Тренировки',
        key: Path.WORKOUTS,
        icon: <HeartFilled style={{ color: `${Colors.primary_light_9}` }} />,
    },
    {
        label: 'Достижения',
        key: Path.ACHIEVEMENTS,
        icon: <TrophyFilled style={{ color: `${Colors.primary_light_9}` }} />,
    },
    {
        label: 'Профиль',
        key: Path.PROFILE,
        icon: <IdcardOutlined style={{ color: `${Colors.primary_light_9}` }} />,
    },
    {
        label: 'Выход',
        key: 'logout',
        icon: <ExitIcon />,
    },
];

export const AppSider: React.FC = () => {
    const { Sider } = Layout;
    const { useBreakpoint } = Grid;
    const { sm } = useBreakpoint();
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const onClickMenuHandler: MenuProps['onClick'] = (e) => {
        if (e.key === 'logout') {
            console.log(e.key);
            // sessionStorage.removeItem("token");
            // localStorage.removeItem("token");
            // navigate('/auth')
        } else navigate(e.key);
    };

    return (
        <Sider
            style={!sm ? { zIndex: 5, position: 'fixed', height: '100%' } : {}}
            className={styles.sider}
            collapsible
            collapsed={collapsed}
            width={sm ? 204 : 106}
            collapsedWidth={sm ? 64 : 1}
            trigger={null}
        >
            <div className={styles.siderLogo}>
                {sm ? (
                    collapsed ? (
                        <LogoSmallIcon />
                    ) : (
                        <LogoIcon style={{ width: 132, height: 33 }} />
                    )
                ) : collapsed ? null : (
                    <LogoIcon style={{ width: 72, height: 18 }} />
                )}
            </div>

            <Menu
                className={styles.siderMenuWrapper}
                onClick={onClickMenuHandler}
                defaultSelectedKeys={[location.pathname.slice(1)]}
                mode='vertical'
                items={menuItems}
            />
            <Button
                type='text'
                onClick={() => setCollapsed(!collapsed)}
                data-test-id={!sm ? 'sider-switch-mobile' : 'sider-switch'}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
        </Sider>
    );
};
