import {
    CalendarTwoTone,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';

  import { ExitIcon } from '@components/project icons';
  
  import type { MenuProps } from 'antd';
  import {Layout, Menu, Button } from 'antd';
  import React, { useState } from 'react';

  
  const { Header, Content, Footer, Sider } = Layout;
  
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
    getItem('Календарь', '1', <CalendarTwoTone />),
    getItem('Тренировки', '2', <HeartFilled />),
    getItem('Достижения', '3', <TrophyFilled />),
    getItem('Профиль', '4', <IdcardOutlined />),
    getItem('Выход', '5', <ExitIcon />),
    
  ];

export const MainPage: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
      <Layout style={{ minHeight: '100vh', maxWidth: '1440px', marginRight:'auto', marginLeft:'auto'}}>
        <Sider collapsible collapsed={collapsed} width={204} collapsedWidth={64} trigger={null} onCollapse={value => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="vertical" items={items}  style={{minHeight: '100%'}}/>
        </Sider>
        <Layout className="site-layout" style={{width:'100%'}}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
            </Header>
          <Content>
            <Button
                type='link'
                style={SiderHendlerStyle}
                onClick={() => setCollapsed(!collapsed)}
                className='siderHendler'
                icon={collapsed ? <MenuUnfoldOutlined color='#8C8C8C' /> : <MenuFoldOutlined color='#8C8C8C'/>}
            />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );

};

const SiderHendlerStyle : React.CSSProperties = {
    height:'66px',
    width:'20px',
    borderRadius:'0',
    backgroundColor: '#fff',

}

