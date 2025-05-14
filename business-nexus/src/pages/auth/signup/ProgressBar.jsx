import React from 'react'

export default function ProgressBar({step}) {
    return (
        <div className="mb-8">
            <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((num) => (
                    <div
                        key={num}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= num
                            ? "bg-blue-600 text-white"
                            : "bg-gray-300 text-gray-600"
                            }`}
                    >
                        {num}
                    </div>
                ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
                <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
            </div>
        </div>
    )
}
