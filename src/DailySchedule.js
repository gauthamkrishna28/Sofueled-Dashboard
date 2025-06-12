import React from "react";

const schedule = [
  { icon: "🎨", title: "Design System", type: "Lecture - Class", color: "#ffe6e6" },
  { icon: "🔤", title: "Typography", type: "Group - Test", color: "#ecebfa" },
  { icon: "🎨", title: "Color Style", type: "Group - Test", color: "#e6fa9e" },
  { icon: "🖼️", title: "Visual Design", type: "Lecture - Test", color: "#fbeee6" },
];

function DailySchedule() {
  return (
    <div className="flex flex-col h-full">
      <div className="font-semibold text-[#181c2e] text-lg mb-4">Daily Schedule</div>
      <div className="flex flex-col gap-3">
        {schedule.map((item, idx) => (
          <div key={idx} className="flex items-center bg-[#f8f8fa] rounded-xl px-4 py-3 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-full mr-4 text-xl" style={{ background: item.color }}>
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium text-[#181c2e] text-sm">{item.title}</div>
              <div className="text-xs text-gray-400">{item.type}</div>
            </div>
            <span className="ml-auto text-gray-300 text-lg">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailySchedule; 