import React from "react";

export default function RecentClients() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="">
        <h4 className="text-xl text-gray-900 font-bold">
          Current Portfolio Highlights
        </h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
        {[
          {
            name: "TechNova",
            role: "SaaS Platform",
            img: "connection1.jpg",
          },
          {
            name: "Finova",
            role: "Payments",
            img: "connection2.jpg",
          },
          {
            name: "DataMind",
            role: "AI Solutions",
            img: "connection3.jpg",
          },
          {
            name: "LogiChain",
            role: "Supply Chain",
            img: "connection4.jpg",
          },
          {
            name: "HealthIQ",
            role: "MedTech",
            img: "connection5.jpg",
          },
          {
            name: "EduVantage",
            role: "EdTech",
            img: "connection6.jpg",
          },
          {
            name: "RetailAI",
            role: "Retail Tech",
            img: "connection7.jpg",
          },
          {
            name: "CloudScale",
            role: "Acquired",
            img: "connection8.jpg",
          },
        ].map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-gray-800"
          >
            <img
              src={`https://vojislavd.com/ta-template-demo/assets/img/connections/${company.img}`}
              className="w-16 rounded-full"
              alt={company.name}
            />
            <p className="text-center font-bold text-sm mt-1">{company.name}</p>
            <p className="text-xs text-gray-500 text-center">{company.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
