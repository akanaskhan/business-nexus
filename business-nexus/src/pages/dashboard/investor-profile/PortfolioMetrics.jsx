import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import {
  FiDollarSign,
  FiTrendingUp,
  FiPieChart,
  FiBriefcase,
  FiArrowUp,
  FiArrowDown,
  FiUsers,
  FiActivity,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";

export default function PortfolioMetrics() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Portfolio Value ($)",
              data: [
                1200000, 1250000, 1300000, 1280000, 1350000, 1400000, 1450000,
                1420000, 1500000, 1550000, 1600000, 1650000,
              ],
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              borderColor: "rgba(16, 185, 129, 1)",
              borderWidth: 2,
              tension: 0.3,
              fill: true,
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
              beginAtZero: false,
              grid: {
                display: true,
                color: "rgba(0, 0, 0, 0.05)",
              },
              ticks: {
                callback: function (value) {
                  return "$" + value / 1000000 + "M";
                },
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
      <h4 className="text-xl text-gray-900 font-bold">Portfolio Metrics</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {/* Portfolio Value */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <FiTrendingUp className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Portfolio Value
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold text-gray-800">$42M</span>
                <span className="flex items-center ml-2 text-sm font-medium text-green-500">
                  <FiArrowUp className="h-4 w-4 mr-0.5" />
                  18.7%
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Current Value</p>
            </div>
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <FiBriefcase className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Active Investments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <FiPieChart className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Active Investments
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold text-gray-800">14</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Current Portfolio</p>
            </div>
            <div className="p-2 rounded-lg bg-green-50 text-green-600">
              <FiActivity className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Avg. Ownership */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <FiBarChart2 className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Avg. Ownership
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold text-gray-800">12.5%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Per Investment</p>
            </div>
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <FiDollarSign className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Top Performer */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-5 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <FiAward className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Top Performer
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold text-gray-800">7.2x</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">CloudScale exit</p>
            </div>
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
              <FiTrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 h-[414px]">
        <canvas
          ref={chartRef}
          id="portfolioChart"
          width="828"
          height="414"
        ></canvas>
      </div>
    </div>
  );
}
