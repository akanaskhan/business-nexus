import React from "react";

export default function ExpAndEdu() {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
      <h4 className="text-xl text-gray-900 font-bold">
        Experience & Education
      </h4>
      <div className="relative px-4">
        <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

        {[
          {
            text: "Started new position as <span class='text-blue-600 font-bold'>Founder & Senior Software Engineer</span> at TechNova Solutions.",
            time: "Nov 2022 - Present",
          },
          {
            text: "Started new position as <span class='text-blue-600 font-bold'>Senior Software Engineer</span> at Tailwind CSS.",
            time: "Jan 2022 - 2022",
          },
          {
            text: "Promoted to <span class='text-blue-600 font-bold'>Team Lead</span> at previous company.",
            time: "Mar 2020 - Dec 2021",
          },
          {
            text: "Completed <span class='text-blue-600 font-bold'>Advanced Cloud Certification</span> from AWS.",
            time: "Feb 2020",
          },
          {
            text: "Started as <span class='text-blue-600 font-bold'>Software Engineer</span> at TechSolutions Inc.",
            time: "Aug 2017 - Feb 2020",
          },
          {
            text: "Graduated with <span class='text-blue-600 font-bold'>Master's in Computer Science</span> from Stanford University.",
            time: "May 2017",
          },
          {
            text: "Completed <span class='text-blue-600 font-bold'>Bachelor's in Software Engineering</span> from MIT.",
            time: "Jun 2015",
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
