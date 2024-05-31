// src/routes/root.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Root() {
  return (
    <>
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
