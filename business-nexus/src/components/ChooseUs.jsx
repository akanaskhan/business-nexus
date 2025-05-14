import React from "react";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";
import DottedSvg from "./ui/DottedSvg";

export default function ChooseUs() {
  return (
    <section class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto overflow-hidden p-12 bg-white dark:bg-dark">
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center justify-between -mx-4">
          <div class="w-full px-4 lg:w-6/12">
            <div class="flex items-center -mx-3 sm:-mx-4">
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="py-3 sm:py-4">
                  <img src="/choose1.jpg" alt="" class="w-full rounded-2xl" />
                </div>
                <div class="py-3 sm:py-4">
                  <img src="choose2.jpg" alt="" class="w-full rounded-2xl" />
                </div>
              </div>
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="relative z-10 my-4">
                  <img src="choose3.jpg" alt="" class="w-full rounded-2xl" />
                  <span class="absolute -right-9 -bottom-9 z-[-1]">
                    <DottedSvg />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div class="mt-10 lg:mt-0">
              <span class="text-base font-semibold tracking-wider text-blue-600 uppercase">
                Why Choose Us
              </span>
              <h2 class="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Make your customers happy by giving services.
              </h2>
              <p class="mb-5 text-base text-body-color dark:text-dark-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </p>
              <p class="mb-8 text-base text-body-color dark:text-dark-6">
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </p>
              <Button icon={ChevronRight} iconPosition="after">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
