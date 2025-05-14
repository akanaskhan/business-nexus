import React from "react";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import Button from "./ui/button";
import dayjs from "dayjs";

export default function Footer() {
  const currentYear = dayjs().year();
  return (
    <section class="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img class="w-auto h-9" src="/logo.png" alt="" />

            <p class="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul class="flex items-center space-x-3 mt-9">
              <li className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                <Twitter className="size-4" />
              </li>

              <li className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                <Facebook className="size-4" />
              </li>

              <li className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                <Instagram className="size-4" />
              </li>

              <li className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                <Github className="size-4" />
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul class="mt-6 space-y-4">
              <li className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                About
              </li>

              <li className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Features
              </li>

              <li className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Works
              </li>

              <li className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Career
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul class="mt-6 space-y-4">
              <li class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Customer Support
              </li>

              <li class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Delivery Details
              </li>

              <li class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Terms & Conditions
              </li>

              <li class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div className="mb-2">
                <label for="email" class="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>

              <Button className="" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">
          © Copyright {currentYear}, All Rights Reserved by Rehan Tufail
        </p>
      </div>
    </section>
  );
}
