import React from "react";

const data = [3, 2, 2.5, 6.75, 3.5, 4, 3];
const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function HoursActivity() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold text-[#181c2e] text-lg">Hours Activity</div>
        <select className="bg-[#f3f4f6] rounded px-2 py-1 text-xs focus:outline-none">
          <option>Weekly</option>
        </select>
      </div>
      <div className="text-xs text-green-600 font-semibold mb-1">+3% <span className="text-gray-400 font-normal">Increase than last week</span></div>
      {/* Bar Chart */}
      <div className="flex items-end justify-between h-36 mt-2 mb-4">
        {data.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center w-7">
            {/* Highlight Wednesday */}
            <div className={`w-3 rounded-t-full ${idx === 3 ? 'bg-lime-400' : 'bg-[#d1d5db]'} transition-all`} style={{ height: `${val * 18}px` }}>
              {idx === 3 && (
                <div className="relative -top-8 left-1/2 -translate-x-1/2">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 shadow-lg whitespace-nowrap z-10">
                    6h 45 min<br />5 Jan 2023
                  </div>
                </div>
              )}
            </div>
            <div className="text-xs text-gray-400 mt-2">{days[idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoursActivity; 