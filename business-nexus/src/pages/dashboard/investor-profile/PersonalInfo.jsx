import React from "react";

export default function PersonalInfo() {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
      <h4 className="text-xl text-gray-900 font-bold">Personal Information</h4>
      <ul className="mt-2 text-gray-700">
        <li className="flex border-y py-2">
          <span className="font-bold w-24">Name:</span>
          <span className="text-gray-700">Michael J. Carter</span>
        </li>
        <li className="flex border-b py-2">
          <span className="font-bold w-24">Position:</span>
          <span className="text-gray-700">Partner</span>
        </li>
        <li className="flex border-b py-2">
          <span className="font-bold w-24">Firm:</span>
          <span className="text-gray-700">Venture Capital Partners</span>
        </li>
        <li className="flex border-b py-2">
          <span className="font-bold w-24">Focus:</span>
          <span className="text-gray-700">Series A/B, SaaS, FinTech</span>
        </li>
        <li className="flex border-b py-2">
          <span className="font-bold w-24">Location:</span>
          <span className="text-gray-700">San Francisco, US</span>
        </li>
        <li className="flex border-b py-2">
          <span className="font-bold w-24">Active Since:</span>
          <span className="text-gray-700">2012</span>
        </li>
        <li className="flex items-center border-b py-2 space-x-2">
          <span className="font-bold w-24">Contact:</span>
          <a href="#" className="text-blue-600 text-sm">
            mcarter@vcp.com
          </a>
        </li>
      </ul>
    </div>
  );
}
