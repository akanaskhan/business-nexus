import React from "react";
import useCurrentUser from "./useCurrentUser";
import InvestorIndex from "./InvestorIndex";
import EnterprenuerIndex from "./EnterprenuerIndex";
import EnterprenuerProfile from "./enterprenuer-profile/EnterprenuerProfile";
import InvestorProfile from "./investor-profile/InvestorProfile";

export default function GuestProfile() {
  const { userData, loading } = useCurrentUser();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Session Expired
          </h2>
          <p className="mt-2 text-gray-600">Please login again to continue</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          {userData.role === "investor" ? (
            <EnterprenuerProfile />
          ) : (
            <InvestorProfile />
          )}
        </div>
      </div>
    </div>
  );
}
