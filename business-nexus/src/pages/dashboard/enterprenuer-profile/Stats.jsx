import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiArrowUp,
  FiArrowDown,
  FiTrendingUp,
  FiPackage,
  FiUserPlus,
  FiActivity,
  FiBarChart2,
} from "react-icons/fi";

export default function Stats() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "Sep",
            "Oct",
            "Nov",
            "December",
          ],
          datasets: [
            {
              label: "Monthly Revenue",
              data: [
                6141, 6300, 6800, 7100, 7500, 8800, 8700, 8900, 8200, 8500,
                9800, 10000,
              ],
              backgroundColor: "bg-red-700",
              borderColor: "rgba(99, 102, 241, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: true,
                color: "rgba(0, 0, 0, 0.05)",
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-3 md:p-8">
      <h4 className="text-xl text-gray-900 font-bold">Statistics</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {/* Revenue Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <FiDollarSign className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Revenue
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold text-gray-800">
                  $24,850
                </span>
                <span className="flex items-center ml-2 text-sm font-medium text-green-500">
                  <FiArrowUp className="h-4 w-4 mr-0.5" />
                  12.5%
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Last 3 Months</p>
            </div>
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <FiTrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <FiShoppingBag className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Orders
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold text-gray-800">1,428</span>
                <span className="flex items-center ml-2 text-sm font-medium text-green-500">
                  <FiArrowUp className="h-4 w-4 mr-0.5" />
                  8.3%
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Last Month</p>
            </div>
            <div className="p-2 rounded-lg bg-green-50 text-green-600">
              <FiPackage className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Customers Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <FiUsers className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Customers
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold text-gray-800">520</span>
                <span className="flex items-center ml-2 text-sm font-medium text-green-500">
                  <FiArrowUp className="h-4 w-4 mr-0.5" />
                  5.2%
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Active this month</p>
            </div>
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <FiUserPlus className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Conversion Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <FiActivity className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Conversion
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold text-gray-800">3.6%</span>
                <span className="flex items-center ml-2 text-sm font-medium text-red-500">
                  <FiArrowDown className="h-4 w-4 mr-0.5" />
                  1.2%
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">From last month</p>
            </div>
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
              <FiBarChart2 className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 h-[414px]">
        <canvas
          ref={chartRef}
          id="verticalBarChart"
          width="828"
          height="414"
        ></canvas>
      </div>
    </div>
  );
}
