import React from "react";

export default function InvestmentThesis() {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
      <h4 className="text-xl text-gray-900 font-bold">Investment Thesis</h4>
      <p className="mt-2 text-gray-700">
        I focus on early-growth stage B2B SaaS companies with strong
        product-market fit, capital efficient business models, and teams that
        can execute at scale. My sweet spot is $5-15M Series A/B rounds where I
        can add value beyond capital.
      </p>

      <h5 className="text-lg text-gray-800 font-semibold mt-4">
        What I Look For
      </h5>
      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
        <li>Recurring revenue model with &gt100% net dollar retention</li>
        <li>Capital efficient growth (Rule of 40 positive)</li>
        <li>Founders with deep domain expertise</li>
        <li>Clear competitive differentiation</li>
        <li>Large and growing TAM ($1B+)</li>
      </ul>

      <h5 className="text-lg text-gray-800 font-semibold mt-4">Value Add</h5>
      <p className="mt-1 text-gray-700">
        Beyond capital, I bring:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          <li>Extensive network of potential customers and partners</li>
          <li>Operational experience scaling SaaS companies</li>
          <li>Help with executive hiring and team building</li>
          <li>Strategic guidance on pricing and GTM</li>
        </ul>
      </p>
    </div>
  );
}
