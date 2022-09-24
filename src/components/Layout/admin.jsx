
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { Children, useState } from 'react';
import Sidebar from '../Admin/Sidebar';
const { Header, Content, Footer } = Layout;


const App = ({children}) => {

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar />
      <Layout className="site-layout">
        <Header ></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;