import React from "react";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section class="bg-white bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p class="text-base font-semibold tracking-wider text-blue-600 uppercase">
              A Business Platform for All
            </p>
            <h1 class="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Connect & Earn from Opportunity
            </h1>
            <p class="my-4 text-base text-black lg:mt-8 sm:text-xl">
              Grow your career fast with right platform.
            </p>

            <Button
              icon={ChevronRight}
              iconPosition="after"
              className="text-[16px]"
              iconSize={18}
            >
              <Link to={"/signup"}>Join for free</Link>
            </Button>

            <p class="mt-5 text-gray-600">
              Already joined us?{" "}
              <Link
                to={"/login"}
                title="Login"
                class="text-black transition-all duration-200 hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>

          <div>
            <img class="w-full" src="/hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
