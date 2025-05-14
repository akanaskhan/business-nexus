import React from "react";

export default function InvestmentHistory() {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
      <h4 className="text-xl text-gray-900 font-bold">Investment History</h4>
      <div className="relative px-4">
        <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

        {[
          {
            text: "Led <span class='text-blue-600 font-bold'>$15M Series B</span> in TechNova Solutions",
            time: "2023",
          },
          {
            text: "Co-invested in <span class='text-blue-600 font-bold'>$8M Series A</span> for Finova Payments",
            time: "2022",
          },
          {
            text: "Exited <span class='text-blue-600 font-bold'>CloudScale</span> to Google (5.2x return)",
            time: "2021",
          },
          {
            text: "Invested in <span class='text-blue-600 font-bold'>$6M Seed</span> for DataMind AI",
            time: "2020",
          },
          {
            text: "Promoted to <span class='text-blue-600 font-bold'>Partner</span> at VCP",
            time: "2019",
          },
          {
            text: "Joined <span class='text-blue-600 font-bold'>Venture Capital Partners</span> as Principal",
            time: "2016",
          },
          {
            text: "MBA from <span class='text-blue-600 font-bold'>Harvard Business School</span>",
            time: "2014",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div className="w-11/12">
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
