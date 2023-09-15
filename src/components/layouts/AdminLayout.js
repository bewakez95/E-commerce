import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function AdminLayout({ children, title }) {
  return (
    <div>
      <Header />
      <div className="admin-layout d-flex">
        <div className="left w-40">
          <Sidebar />
        </div>
        <div className="right flex-grow-1 p-3">
          <h1 className="">{title}</h1>
          <main className="main">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLayout;
