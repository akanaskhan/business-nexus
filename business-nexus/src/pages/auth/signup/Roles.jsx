import React from 'react'
import { FaUserTie, FaLightbulb } from "react-icons/fa";

export default function Roles({ role, setRole, errors }) {
    return (
        <div className="space-y-6">
            <h2 class="py-2 text-center text-base font-semibold tracking-wider text-blue-600 uppercase">
                Choose your role
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
                <div
                    onClick={() => setRole("investor")}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${role === "investor"
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                        : "border-gray-200 hover:border-blue-400"
                        }`}
                >
                    <FaUserTie className="text-4xl mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold mb-2">Investor</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Looking to invest in promising startups
                    </p>
                </div>
                <div
                    onClick={() => setRole("entrepreneur")}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${role === "entrepreneur"
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                        : "border-gray-200 hover:border-blue-400"
                        }`}
                >
                    <FaLightbulb className="text-4xl mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold mb-2">Entrepreneur</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Seeking funding for your startup
                    </p>
                </div>
            </div>
            {errors.role && (
                <p className="text-red-500 text-sm mt-2">{errors.role}</p>
            )}
        </div>
    )
}
