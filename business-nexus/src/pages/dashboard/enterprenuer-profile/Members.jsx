import React from "react";

export default function Members() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="">
        <h4 className="text-xl text-gray-900 font-bold">Our Staff Members</h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
        {[
          {
            name: "Diane Aguilar",
            role: "UI/UX Design",
            img: "connection1.jpg",
          },
          {
            name: "Frances Mather",
            role: "Software Engineer",
            img: "connection2.jpg",
          },
          {
            name: "Lucas Bell",
            role: "Creative Writer",
            img: "connection9.jpg",
          },
          {
            name: "Debra Herring",
            role: "Backend Developer",
            img: "connection10.jpg",
          },
          {
            name: "Benjamin Farrior",
            role: "Software Engineer Lead ",
            img: "connection11.jpg",
          },
          {
            name: "Maria Heal",
            role: "Linux System Administrator",
            img: "connection12.jpg",
          },
          {
            name: "Edward Ice",
            role: "Customer Support",
            img: "connection13.jpg",
          },
          {
            name: "Jeffery Silver",
            role: "Software Engineer",
            img: "connection14.jpg",
          },
          {
            name: "Jennifer Schultz",
            role: "Project Manager",
            img: "connection15.jpg",
          },
          {
            name: "Joseph Marlatt",
            role: "Team Lead",
            img: "connection16.jpg",
          },
        ].map((connection, index) => (
          <a
            key={index}
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src={`https://vojislavd.com/ta-template-demo/assets/img/connections/${connection.img}`}
              className="w-16 rounded-full"
              alt={connection.name}
            />
            <p className="text-center font-bold text-sm mt-1">
              {connection.name}
            </p>
            <p className="text-xs text-gray-500 text-center">
              {connection.role}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
