import React from "react";
import Navbar from "./Navbar";
import Footer from "../../components/Footer";
import useCurrentUser from "./useCurrentUser";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { userData, loading, handleLogout } = useCurrentUser();

  if (loading) {
    return <div>Loading dashboard layout...</div>;
  }

  if (!userData) {
    return <div>User not authenticated.</div>;
  }

  return (
    <>
      <Navbar data={userData} handleLogout={handleLogout} />
      <main className="min-h-screen mt-8">
        <Outlet />
        {/* This will render nested routes like <Dashboard /> or <ProfilePage and other /> */}
      </main>
      <Footer />
    </>
  );
}
