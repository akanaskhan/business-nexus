import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-10 bg-white sm:py-12 md:py-18">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h6 class="text-base font-semibold tracking-wider text-blue-600 uppercase">
          how it works
        </h6>
        <div className="relative mt-12 lg:mt-12">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {[
              {
                step: "1",
                title: "Create a free account",
                description:
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
              },
              {
                step: "2",
                title: "Present Business Model",
                description:
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
              },
              {
                step: "3",
                title: "Get Investment",
                description:
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
              },
            ].map(({ step, title, description }, index) => (
              <div key={index}>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-200/30 rounded-full ">
                  <span className="text-xl font-semibold text-blue-700">
                    {step}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  {title}
                </h3>
                <p className="mt-4 text-base text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
