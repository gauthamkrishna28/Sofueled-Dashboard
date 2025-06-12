import React from "react";

function NewCourseCard({ icon, title, lessons, rate, type, color }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl px-6 py-5 min-w-[220px] max-w-[260px] flex-1 shadow-md border border-[#f3f3f3]">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full mr-3 text-xl" style={{ background: color }}>
          {icon}
        </div>
        <div>
          <div className="font-semibold text-[#181c2e] text-base leading-tight">{title}</div>
          <div className="text-xs text-gray-400 font-medium mt-1">{lessons} Lessons</div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div>
          <div className="text-xs text-gray-400 font-medium">Rate</div>
          <div className="flex items-center gap-1 text-base font-semibold text-[#181c2e]">
            <span className="text-yellow-400 text-lg">★</span> {rate}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 font-medium">Type</div>
          <div className="text-sm font-semibold text-[#181c2e] whitespace-nowrap">{type}</div>
        </div>
      </div>
    </div>
  );
}

export default NewCourseCard; 