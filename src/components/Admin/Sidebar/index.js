import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Layout, Menu } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
const Sidebar = () => {
  const { Header, Content, Footer, Sider } = Layout;  
 
  const logo = {
    height: "32px",
    margin: "16px",
    background: "rgba(255, 255, 255, 0.3)",
  }
  const [collapsed, setCollapsed] = useState(false);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(<Link href={"service"}>Service</Link>, '1',<PieChartOutlined />),
    getItem( <Link href={"shift"}>Shift</Link>, '2', <DesktopOutlined />),
    getItem(<Link href={"employee"}>Employee</Link>, '3', <UserOutlined />),
    getItem(<Link href={"user"}>User</Link>, '4', <UserOutlined />),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem(<Link href={"contact"}>Contact</Link>, '5', <FileOutlined />),
  ];

  return <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    <div style={logo} className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
  </Sider>;
};

export default Sidebar;
