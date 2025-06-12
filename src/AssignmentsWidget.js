import React from "react";

const assignments = [
  {
    icon: "📊",
    title: "Methods of data",
    date: "02 July, 10:30 AM",
    status: "In progress",
    statusColor: "bg-blue-100 text-blue-700"
  },
  {
    icon: "🧪",
    title: "Market Research",
    date: "14 June, 12:45 AM",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700"
  },
  {
    icon: "📦",
    title: "Data Collection",
    date: "12 May, 11:00 AM",
    status: "Upcoming",
    statusColor: "bg-orange-100 text-orange-700"
  }
];

function AssignmentsWidget() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold text-[#181c2e] text-lg">Assignments</div>
        <button className="bg-lime-100 text-lime-700 rounded-full w-7 h-7 flex items-center justify-center font-bold text-xl">+</button>
      </div>
      <div className="flex flex-col gap-3">
        {assignments.map((item, idx) => (
          <div key={idx} className="flex items-center bg-[#f8f8fa] rounded-xl px-4 py-3 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-full mr-4 text-xl bg-white">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium text-[#181c2e] text-sm">{item.title}</div>
              <div className="text-xs text-gray-400">{item.date}</div>
            </div>
            <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${item.statusColor}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignmentsWidget; 