import React, { useEffect, useRef, useState } from "react";

import ProfileCard from "./ProfileCard";
import PersonalInfo from "./PersonalInfo";
import ExpAndEdu from "./ExpAndEdu";
import About from "./About";
import Stats from "./Stats";
import Members from "./Members";

const EnterprenuerProfile = () => {
  return (
    <div className="h-full  w-full">
      <ProfileCard />

      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <PersonalInfo />
          <ExpAndEdu />
        </div>
        <div className="flex flex-col w-full 2xl:w-2/3">
          <About />
          <Stats />
        </div>
      </div>
      <Members />
    </div>
  );
};

export default EnterprenuerProfile;
