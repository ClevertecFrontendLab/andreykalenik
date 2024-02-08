import {
    CalendarTwoTone,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';

  
  import type { MenuProps } from 'antd';

  import Icon from '@ant-design/icons';
  import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

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

  const ExitSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 15 16">
        <path d="M3.74621 7.39397V5.86897C3.74621 5.80112 3.66943 5.76183 3.61585 5.80469L0.919425 7.93683C0.90984 7.94439 0.902093 7.95402 0.896766 7.965C0.891439 7.97598 0.888672 7.98802 0.888672 8.00022C0.888672 8.01243 0.891439 8.02447 0.896766 8.03545C0.902093 8.04643 0.90984 8.05606 0.919425 8.06362L3.61585 10.1975C3.66764 10.2386 3.74621 10.2011 3.74621 10.1333V8.60826H10.6664V7.39397H3.74621Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62716 0.929688H14.0474C14.3242 0.929688 14.5474 1.1529 14.5474 1.42969V14.5725C14.5474 14.8493 14.3242 15.0725 14.0474 15.0725H4.62716C4.35038 15.0725 4.12716 14.8493 4.12716 14.5725V11.5725C4.12716 11.5333 4.15931 11.5011 4.19859 11.5011H5.27002C5.30931 11.5011 5.34145 11.5333 5.34145 11.5725V13.8583H13.3331V8.60826V7.39397V2.14397H5.34145V4.42969C5.34145 4.46897 5.30931 4.50112 5.27002 4.50112H4.19859C4.15931 4.50112 4.12716 4.46897 4.12716 4.42969V1.42969C4.12716 1.1529 4.35038 0.929688 4.62716 0.929688Z" fill="currentColor"/>
    </svg>
  );

  const ExitIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ExitSvg} {...props} />
  );

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

