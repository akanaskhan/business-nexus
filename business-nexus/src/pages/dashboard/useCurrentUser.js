import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useCurrentUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") ||
      sessionStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login", { replace: true });
      return;
    }

    const storedUser =
      localStorage.getItem("currentUser") ||
      sessionStorage.getItem("currentUser");

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
        const verifiedUser = allUsers.find((u) => u.id === user.id);

        if (verifiedUser) {
          setUserData(verifiedUser);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        handleLogout();
      }
    } else {
      handleLogout();
    }

    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
    navigate("/login", { replace: true });
  };

  return { userData, loading, handleLogout };
};

export default useCurrentUser;
