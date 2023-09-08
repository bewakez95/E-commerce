import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function AdminLayout({ children, title }) {
  return (
    <div>
      <Header />
      <div className="admin-layout d-flex">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <h1 className="p-3">{title}</h1>
          <main className="main">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLayout;
