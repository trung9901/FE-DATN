import React from "react";
import Footers from "../Client/Footer";
import Headers from "../Client/Header";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const LayoutMain = ({ children }) => {
  return (
    <>
      <Layout>
        <Header>
          <Headers />
        </Header>
        <Content> {children}</Content>
        <Footer>
          <Footers />
        </Footer>
      </Layout>
    </>
  );
};

export default LayoutMain;
