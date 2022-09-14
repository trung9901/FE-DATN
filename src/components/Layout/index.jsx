import React from "react";
import Footer from "../Client/Footer";
import Header from "../Client/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
