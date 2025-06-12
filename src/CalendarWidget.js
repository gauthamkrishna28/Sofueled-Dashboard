import React from "react";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const dates = [
  [30, 31, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, null, null],
];

function CalendarWidget() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold text-[#181c2e] text-lg">August, 2023</div>
        <div className="flex gap-2 text-gray-400">
          <button className="rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-100">&#60;</button>
          <button className="rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-100">&#62;</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-400 mb-1">
        {days.map((d) => (
          <div key={d} className="text-center font-semibold">{d}</div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {dates.map((week, i) => (
          <div key={i} className="grid grid-cols-7 gap-1">
            {week.map((date, j) => (
              <div
                key={j}
                className={`text-center rounded-full w-7 h-7 flex items-center justify-center ${date === 17 ? 'bg-lime-300 text-[#181c2e] font-bold' : date ? 'bg-white text-[#181c2e]' : ''}`}
              >
                {date ? date : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarWidget; 