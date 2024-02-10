import {
    CalendarTwoTone,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined,
  } from '@ant-design/icons';


  import type { MenuProps } from 'antd';
  import {Layout, Menu, Button} from 'antd'

  import React, { useState } from 'react';
  import { useWindowSize } from 'usehooks-ts'

  import { ExitIcon, LogoIcon, LogoSmallIcon } from '@components/project icons';
  import styles from './main-page.module.scss';

  const { Header, Content,  Sider } = Layout
  
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
    getItem('Календарь', 'calendar', <CalendarTwoTone twoToneColor='#061178' style={{ width: '16px', height: '16px' }} />),
    getItem('Тренировки', 'workouts', <HeartFilled style={{ color: '#061178', width: '16px', height: '16px' }}  />),
    getItem('Достижения', 'records', <TrophyFilled style={{ color: '#061178', width: '16px', height: '16px' }}  />),
    getItem('Профиль', 'profile', <IdcardOutlined style={{ color: '#061178', width: '16px', height: '16px' }} />),
    getItem('Выход', 'logout', <ExitIcon/>),
  ];

  const itemsMobile : MenuItem[] =[
    getItem('Календарь', 'calendar'),
    getItem('Тренировки', 'workouts'),
    getItem('Достижения', 'records'),
    getItem('Профиль', 'profile',),
    getItem('Выход', 'logout'),
  ]

export const MainPage: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false)
    const  screenWidht = useWindowSize().width
    const mobileBreakpoint = 576

    return (
      <Layout className={styles.mainLayout}>
        <Sider 
          className={styles.slider}
          collapsible collapsed={collapsed}
          width={screenWidht > mobileBreakpoint ? 204 : 106}
          collapsedWidth={screenWidht > mobileBreakpoint ? 64 : 0}
          trigger={null}
          onCollapse={value => setCollapsed(value)}>
          <div className={styles.sliderLogo}>
               {collapsed ?  <LogoSmallIcon/> : <LogoIcon/>}
          </div>
          <Menu className={styles.sliderNav} mode="vertical" items={screenWidht > mobileBreakpoint ? items: itemsMobile} />
          <Button
                  type='text'
                  onClick={() => setCollapsed(!collapsed)}
                  data-test-id={screenWidht > mobileBreakpoint ? 'sider-switch' : 'sider-switch-mobile'}
                  icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
              />
        </Sider>
        <Layout className={styles.ContentLayout}>
            <Header className={styles.header} >
              <p className={styles.headerTitle}>Главная</p>
              <h1 className={styles.h1}>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</h1>
              <Button
                className={styles.headerActions}
                type="text"
                icon={<SettingOutlined />}>
                Настройки
              </Button>  
            </Header>
          <Content className={styles.contentWrapper}>
          
          </Content>
        </Layout>
      </Layout>
    );

};

