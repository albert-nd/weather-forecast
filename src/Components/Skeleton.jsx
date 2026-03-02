import React from "react";

export default function WeatherSkeleton() {
  return (
    <div className="space-y-5 mt-6 animate-pulse">

      {/* Main Card Skeleton */}
      <div className="relative p-6 rounded-xl bg-gray-700/40 min-h-45 overflow-hidden">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* City Name */}
          <div className="h-6 w-32 bg-gray-600 rounded"></div>

          {/* Icon + Temp */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div className="h-10 w-16 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>

      {/* Metrics Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-gray-700/40 p-4 rounded-lg space-y-2"
          >
            <div className="h-3 w-16 bg-gray-600 rounded mx-auto"></div>
            <div className="h-5 w-12 bg-gray-600 rounded mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}