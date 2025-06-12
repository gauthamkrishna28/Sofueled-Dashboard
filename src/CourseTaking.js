import React from "react";

const courses = [
  {
    icon: "🟣",
    title: "3D Design Course",
    instructor: "Micheal Andrew",
    remaining: "8h 45 min",
    progress: 45,
    color: "#ecebfa",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    icon: "🔴",
    title: "Development Basics",
    instructor: "Natalia Varnan",
    remaining: "18h 12 min",
    progress: 75,
    color: "#ffe6e6",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

function CourseTaking() {
  return (
    <div className="flex flex-col h-full">
      <div className="font-semibold text-[#181c2e] text-lg mb-4">Course You're Taking</div>
      <div className="flex flex-col gap-4">
        {courses.map((course, idx) => (
          <div key={idx} className="flex items-center bg-[#f8f8fa] rounded-xl px-4 py-4 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl mr-4 text-2xl" style={{ background: course.color }}>
              {course.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium text-[#181c2e] text-sm flex items-center gap-2">
                {course.title}
                <img src={course.avatar} alt="avatar" className="w-5 h-5 rounded-full object-cover inline-block" />
              </div>
              <div className="text-xs text-gray-400 mb-1">{course.instructor}</div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Remaining</span>
                <span>{course.remaining}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
            </div>
            <span className="ml-4 font-semibold text-[#181c2e]">{course.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseTaking; 