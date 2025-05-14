import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders nested route content like <HomePage /> */}
      <Footer />
    </>
  );
}
  