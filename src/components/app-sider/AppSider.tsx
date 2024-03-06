import { useState } from 'react';
import {
    CalendarTwoTone,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Button, Grid } from 'antd';

import { ExitIcon, LogoIcon, LogoSmallIcon } from '@components/project-icons';

import styles from './AppSider.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    onClick?: void,
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        onClick,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(
        'Календарь',
        'calendar',
        <CalendarTwoTone twoToneColor='#061178' style={{ width: '16px', height: '16px' }} />,
    ),
    getItem(
        'Тренировки',
        'workouts',
        <HeartFilled color='#061178' style={{ color: '#061178', width: '16px', height: '16px' }} />,
    ),
    getItem(
        'Достижения',
        'records',
        <TrophyFilled style={{ color: '#061178', width: '16px', height: '16px' }} />,
    ),
    getItem(
        'Профиль',
        'profile',
        <IdcardOutlined style={{ color: '#061178', width: '16px', height: '16px' }} />,
    ),
];

const footer: MenuItem[] = [getItem('Выход', 'logout', <ExitIcon />)];

export const AppSider: React.FC = () => {
    const { Sider } = Layout;
    const { useBreakpoint } = Grid;
    const { sm } = useBreakpoint();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider
            style={!sm ? { zIndex: 5, position: 'fixed', height: '100%' } : {}}
            className={styles.sider}
            collapsible
            collapsed={collapsed}
            width={sm ? 204 : 106}
            collapsedWidth={sm ? 64 : 1}
            trigger={null}
            onCollapse={(value) => setCollapsed(value)}
        >
            <div className={styles.siderLogo}>
                {sm ? (
                    collapsed ? (
                        <LogoSmallIcon />
                    ) : (
                        <LogoIcon style={{ width: 133, height: 33 }} />
                    )
                ) : collapsed ? null : (
                    <LogoIcon style={{ width: 72, height: 18 }} />
                )}
            </div>
            <div className={styles.siderMenuWrapper}>
                <Menu className={styles.siderNav} mode='vertical' items={items} />
                <Menu className={styles.siderFooter} mode='vertical' items={footer} />
            </div>
            <Button
                type='text'
                onClick={() => setCollapsed(!collapsed)}
                data-test-id={!sm ? 'sider-switch-mobile' : 'sider-switch'}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
        </Sider>
    );
};
