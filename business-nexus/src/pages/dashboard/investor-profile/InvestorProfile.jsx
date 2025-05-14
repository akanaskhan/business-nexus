import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ProfileCard from "./ProfileCard";
import PersonalInfo from "./PersonalInfo";
import InvestmentHistory from "./InvestmentHistory";
import InvestmentThesis from "./InvestmentThesis";
import PortfolioMetrics from "./PortfolioMetrics";
import RecentClients from "./RecentClients";

const InvestorProfile = ({ request }) => {
  return (
    <div className="h-full w-full">
      <ProfileCard />
      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <PersonalInfo />
          <InvestmentHistory />
        </div>
        <div className="flex flex-col w-full 2xl:w-2/3">
          <InvestmentThesis />
          <PortfolioMetrics />
        </div>
      </div>
      <RecentClients />
    </div>
  );
};

export default InvestorProfile;
