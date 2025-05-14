import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProfilePage from "./pages/dashboard/ProfilePage";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Chat from "./pages/dashboard/chat/Chat";
import GuestProfile from "./pages/dashboard/GuestProfile";

function App() {
  return (
    <Routes>
      {/* Root Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />

      {/* Dashboard Layout  */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chat" element={<Chat />} />
        <Route path={`guest-profile/:id`} element={<GuestProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
