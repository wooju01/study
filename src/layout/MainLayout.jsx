import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout({ title, messageCount, latestQuestion }) {
  return (
    <div className="app-shell">
      <Sidebar messageCout={messageCout} latestQuestion={latestQuestion} />
      <div className="workspace">
        <Header title={title} messageCout={messageCout} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
