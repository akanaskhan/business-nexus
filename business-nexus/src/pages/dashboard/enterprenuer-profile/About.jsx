import React from "react";

export default function About() {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
      <h4 className="text-xl text-gray-900 font-bold">
        About TechNova Solutions
      </h4>
      <p className="mt-2 text-gray-700">
        TechNova Solutions is a cutting-edge SaaS platform revolutionizing how
        small businesses manage their operations. Founded in 2022 by a team of
        ex-FAANG engineers, we're on a mission to democratize enterprise-grade
        tools for businesses of all sizes.
      </p>

      <h5 className="text-lg text-gray-800 font-semibold mt-4">
        The Problem We Solve
      </h5>
      <p className="mt-1 text-gray-700">
        Small businesses waste countless hours juggling between disconnected
        tools for CRM, project management, and accounting. This fragmentation
        leads to inefficiencies, data silos, and missed growth opportunities.
        Current solutions are either too complex or lack critical integrations.
      </p>

      <h5 className="text-lg text-gray-800 font-semibold mt-4">Our Solution</h5>
      <p className="mt-1 text-gray-700">
        TechNova offers an all-in-one business operating system featuring:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          <li>Unified dashboard for all business operations</li>
          <li>AI-powered analytics and recommendations</li>
          <li>Seamless third-party integrations</li>
          <li>Mobile-first design for on-the-go management</li>
          <li>Affordable pricing with no hidden fees</li>
        </ul>
      </p>

      <p className="mt-4 text-gray-700">
        Since our beta launch, we've helped over 500 businesses streamline their
        operations, saving them an average of 15 hours per week. Our vision is
        to become the operating system for the next generation of small
        businesses.
      </p>
    </div>
  );
}
