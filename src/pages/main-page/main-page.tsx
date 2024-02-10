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

export const MainPage: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
      <Layout className={styles.mainLayout}>
        <Sider className={styles.slider} collapsible collapsed={collapsed} width={204} collapsedWidth={64} trigger={null} onCollapse={value => setCollapsed(value)}>
          <div className={styles.sliderLogo}>
               {collapsed ?  <LogoSmallIcon/> : <LogoIcon/>}
          </div>

          <Menu className={styles.sliderNav} mode="vertical" items={items} />
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
              <Button
                  type='text'
                  onClick={() => setCollapsed(!collapsed)}
                  data-test-id='sider-switch'
                  icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
              />
              
            </Header>
          <Content className={styles.contentWrapper}>
            <div >
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    );

};

