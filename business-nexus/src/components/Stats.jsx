import React from "react";
import {
  FaChartLine,
  FaUsers,
  FaDollarSign,
  FaPercentage,
} from "react-icons/fa";
import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    {
      id: 1,
      title: "Total Investors",
      value: 15780,
      icon: <FaUsers className="w-6 h-6 text-blue-600" />,
      prefix: "",
      suffix: "+",
      growth: 15.3,
    },
    {
      id: 2,
      title: "Total Entrepreneurs",
      value: 158432,
      icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
      prefix: "",
      suffix: "+",
      growth: 19.7,
    },
    {
      id: 3,
      title: "Total Investment Value",
      value: 2800000,
      icon: <FaDollarSign className="w-6 h-6 text-blue-600" />,
      prefix: "$",
      suffix: "",
      growth: 25.7,
    },
    {
      id: 4,
      title: "Investment Growth Rate",
      value: 27.5,
      icon: <FaPercentage className="w-6 h-6 text-blue-600" />,
      prefix: "",
      suffix: "%",
      growth: 60,
    },
  ];

  return (
    <div className=" bg-white">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 py-12 md:py-18 mx-auto">
        <div className="mb-6">
          <h6 class="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Last Month's Insight
          </h6>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div>{stat.icon}</div>
                <div className="text-sm font-medium text-gray-500">
                  {stat.title}
                </div>
              </div>

              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">
                  {stat.prefix}
                </span>
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  decimal="."
                  decimals={stat.title === "Investment Growth Rate" ? 1 : 0}
                  className="text-3xl font-bold mx-1 text-gray-900"
                />
                <span className="text-2xl font-bold text-gray-900">
                  {stat.suffix}
                </span>
              </div>

              <div className="mt-2 flex items-center text-green-600">
                <FaChartLine className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">
                  {" "}
                  +{stat.growth}% from last month
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
