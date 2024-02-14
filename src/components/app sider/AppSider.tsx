import React, { useState} from 'react';
import styles from './AppSider.module.scss';
import { DevicesType } from '@pages/main-page/main-page';
import {
    CalendarTwoTone,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';


  import type { MenuProps } from 'antd';
  import {Layout, Menu, Button} from 'antd'
 
  import { ExitIcon, LogoIcon, LogoSmallIcon } from '@components/project icons';

  const {Sider} = Layout
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }


  const items: MenuItem[] = [
    getItem('Календарь', 'calendar', <CalendarTwoTone twoToneColor='#061178' style={{ width: '16px', height: '16px' }}/> ),
    getItem('Тренировки', 'workouts', <HeartFilled  color='#061178'   style={{ color: '#061178', width: '16px', height: '16px' }}  />),
    getItem('Достижения', 'records', <TrophyFilled style={{ color: '#061178', width: '16px', height: '16px' }}  />),
    getItem('Профиль', 'profile', <IdcardOutlined style={{ color: '#061178', width: '16px', height: '16px' }} />),
  ];

  const footer: MenuItem[] = [
    getItem('Выход', 'logout', <ExitIcon/>),
  ];




export const AppSider:React.FC<DevicesType> = ({isMobile}) =>{

    const [collapsed, setCollapsed] = useState(false)
    const isDesktop = !isMobile

    return(
        <Sider 
        style={isMobile ? {zIndex:5, position:'fixed', height:'100%'} : {}}
        className={styles.sider}
        collapsible collapsed={collapsed}
        width={isDesktop ? 204 : 106}
        collapsedWidth={isDesktop ? 64 : 1}
        trigger={null}
        onCollapse={value => setCollapsed(value)}>
        <div className={styles.siderLogo}>
             { isDesktop ?
             collapsed ?  <LogoSmallIcon/> : <LogoIcon/>:
             collapsed ?  null : <LogoIcon/>
             }

        </div>
        <div className={styles.siderMenuWrapper}>
          <Menu className={styles.siderNav} mode="vertical" items={ items } />
          <Menu className={styles.siderFooter} mode="vertical" items={ footer} />
        </div>
        <Button
                type='text'
                onClick={() => setCollapsed(!collapsed)}
                data-test-id={isMobile ? 'sider-switch-mobile' : 'sider-switch'}
                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            />
      </Sider>
    )
}

