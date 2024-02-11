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
 
  import React, { useState } from 'react';
  import { useWindowSize } from 'usehooks-ts'

  import { ExitIcon, LogoIcon, LogoSmallIcon } from '@components/project icons';
  import styles from './main-page.module.scss';
  import { MainLayout } from '@components/main layout';
import { AppHeader } from '@components/app header';

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

  const itemsMobile : MenuItem[] =[
    getItem('Календарь', 'calendar'),
    getItem('Тренировки', 'workouts'),
    getItem('Достижения', 'records'),
    getItem('Профиль', 'profile',),
  ]

  const footer: MenuItem[] = [
    getItem('Выход', 'logout', <ExitIcon/>),
  ];

  const footerMobile : MenuItem[] =[

    getItem('Выход', 'logout'),
  ]



export const MainPage: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false)
    const  screenWidht = useWindowSize().width
    const mobileBreakpoint = 576
    const padBreakpoint = 992

    return (
      <Layout className={styles.mainLayout}>
        <Sider 
          className={styles.sider}
          collapsible collapsed={collapsed}
          width={screenWidht > mobileBreakpoint ? 204 : 106}
          collapsedWidth={screenWidht > mobileBreakpoint ? 64 : 1}
          trigger={null}
          onCollapse={value => setCollapsed(value)}>
          <div className={styles.siderLogo}>
               { screenWidht > mobileBreakpoint ?
               collapsed ?  <LogoSmallIcon/> : <LogoIcon/>:
               collapsed ?  null : <LogoIcon/>
               }

          </div>
          <div className={styles.siderMenuWrapper}>
            <Menu className={styles.siderNav} mode="vertical" items={screenWidht > mobileBreakpoint ? items: itemsMobile} />
            <Menu className={styles.siderFooter} mode="vertical" items={screenWidht > mobileBreakpoint ? footer: footerMobile} />
          </div>
          <Button
                  type='text'
                  onClick={() => setCollapsed(!collapsed)}
                  data-test-id={screenWidht > mobileBreakpoint ? 'sider-switch' : 'sider-switch-mobile'}
                  icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
              />
        </Sider>
        <Layout className={styles.ContentLayout}>
            <AppHeader 
              screenWidht={screenWidht}
              mobileBreakpoint={mobileBreakpoint} 
              padBreakpoint={padBreakpoint}
              />
            <MainLayout/>
        </Layout>
      </Layout>
    );

};

