import React, { useState } from "react";
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function EnterprenuerIndex() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Sarah Anderson",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      snippet: "Tech investor passionate about AI and SaaS.",
      status: "Pending", // Other statuses: "Accepted", "Declined"
    },
    {
      id: 2,
      name: "Michael Chen",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      snippet: "Focused on healthcare innovation and biotech.",
      status: "Pending",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      snippet: "Investing in clean energy and sustainability.",
      status: "Pending",
    },
  ]);

  const handleRequestAction = (id, action) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id
          ? {
              ...request,
              status: action === "accept" ? "Accepted" : "Declined",
            }
          : request
      )
    );
  };

  const RequestCard = ({ request }) => (
    <div className="bg-white rounded-xl shadow-lg p-2 md:p-4 flex flex-col ">
      {/* Profile Image */}
      <div className="rounded-lg overflow-hidden mb-4">
        <img
          src={request.profileImage}
          alt={request.name}
          className="object-cover aspect-square bg-top w-full h-full"
          onError={(e) => {
            e.target.src =
              "[https://images.unsplash.com/photo-1535713875002-d1d0cf377fde](https://images.unsplash.com/photo-1535713875002-d1d0cf377fde)";
          }}
        />
      </div>
      {/* Name and Snippet */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">{request.name}</h3>
        <p className="text-sm text-gray-600">{request.snippet}</p>

        {request.status === "Accepted" ? (
          <div className="w-full flex items-center justify-between gap-2 mt-11">
            <Button
              className="w-full md:w-36 px-4 cursor-pointer"
              onClick={() => console.log(`Viewing profile of ${request.name}`)}
            >
              <Link to={"/dashboard/chat"}>Message</Link>
            </Button>
            <Button
              className="w-full md:w-36 px-4 cursor-pointer"
              onClick={() => console.log(`Viewing profile of ${request.name}`)}
            >
              <Link
                request={request}
                to={`/dashboard/guest-profile/${request.name}`}
              >
                View Profile
              </Link>
            </Button>
          </div>
        ) : (
          <p
            className={`text-sm mt-2 ${
              request.status === "Declined" ? "text-red-600" : "text-gray-600"
            }`}
          >
            Status: {request.status}
          </p>
        )}
      </div>
      {/* Action Buttons */}
      {request.status === "Pending" && (
        <div className="w-full flex items-center justify-between gap-3 ">
          <Button
            className="w-full sm:w-24 md:w-32 lg:w-36 bg-green-500 text-white px-4 rounded-md hover:bg-green-600"
            onClick={() => handleRequestAction(request.id, "accept")}
          >
            Accept
          </Button>
          <Button
            className="w-full sm:w-24 md:w-32 lg:w-36 bg-red-500 text-white px-4  rounded-md hover:bg-red-600"
            onClick={() => handleRequestAction(request.id, "decline")}
          >
            Decline
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full md:w-[90vw] mx-auto min-h-screen md:p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
        View Collaboration Requests
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.length === 0 ? (
          <p className="text-gray-600 text-center col-span-full">
            No collaboration requests at the moment.
          </p>
        ) : (
          requests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))
        )}
      </div>
    </div>
  );
}
