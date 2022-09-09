import React from "react";
import Sidebar from "../Admin/Sidebar";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default LayoutAdmin;
