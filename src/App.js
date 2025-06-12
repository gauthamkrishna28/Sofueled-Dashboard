import React, { useState } from "react";
import NewCourseCard from "./NewCourseCard";
import HoursActivity from "./HoursActivity";
import DailySchedule from "./DailySchedule";
import CourseTaking from "./CourseTaking";
import CalendarWidget from "./CalendarWidget";
import AssignmentsWidget from "./AssignmentsWidget";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#ede9fe] flex items-start justify-center py-6 px-2 md:px-8">
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-6 left-4 z-30 bg-white rounded-full p-2 shadow-lg"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="28" height="28" fill="none" stroke="#181c2e" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Main container */}
      <div className="w-full max-w-[1440px] bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`bg-[#181c2e] w-64 flex-shrink-0 flex flex-col py-8 px-4 min-h-[90vh] z-30 fixed md:static top-0 left-0 h-full md:h-auto transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:block`}
          style={{ maxWidth: '100vw' }}
        >
          {/* Close button for mobile */}
          <button
            className="md:hidden absolute top-6 right-4 text-white text-2xl z-40"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            &times;
          </button>
          {/* Logo */}
          <div className="mb-10 flex items-center justify-center">
            <span className="text-2xl font-bold text-white tracking-widest">EDUCO</span>
          </div>
          {/* Nav (placeholder) */}
          <nav className="flex flex-col gap-2">
            <div className="bg-[#e6fa9e] text-[#181c2e] rounded-xl px-4 py-3 font-semibold flex items-center gap-3 cursor-pointer">
              <span>🏠</span> Dashboard
            </div>
            <div className="text-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#23284a]">
              <span>📚</span> My Courses
            </div>
            <div className="text-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#23284a]">
              <span>👥</span> My Classes
            </div>
            <div className="text-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#23284a]">
              <span>💬</span> Messages
            </div>
            <div className="text-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#23284a] relative">
              <span>🔔</span> Notifications
              <span className="absolute right-4 bg-[#f7d6d6] text-[#181c2e] rounded-full px-2 text-xs font-bold">2</span>
            </div>
            <div className="text-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#23284a]">
              <span>🗓️</span> Calendars
            </div>
            <div className="text-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#23284a]">
              <span>🌐</span> Community
            </div>
            <div className="text-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#23284a] mt-auto">
              <span>⚙️</span> Settings
            </div>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 bg-[#f8f8fa] p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-[#181c2e]">Welcome back Taylor <span className="inline-block">👋</span></h1>
            <div className="flex items-center gap-4">
              <input type="text" placeholder="Search courses" className="rounded-full px-4 py-2 bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#e6fa9e]" />
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#e6fa9e]">
                {/* Placeholder avatar */}
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Dashboard Widgets Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column (New Courses, Hours Activity, Course You're Taking) */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {/* New Courses */}
              <section className="bg-[#f8f8fa] rounded-2xl p-6 shadow flex flex-col gap-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-[#181c2e]">New Courses</h2>
                  <a href="#" className="text-sm text-gray-500 font-semibold hover:underline">View All</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <NewCourseCard
                    icon={<span role="img" aria-label="writing">📝</span>}
                    title="Content Writing"
                    lessons={12}
                    rate={4.8}
                    type="Data Research"
                    color="#fbeee6"
                  />
                  <NewCourseCard
                    icon={<span role="img" aria-label="usability">🧪</span>}
                    title="Usability Testing"
                    lessons={15}
                    rate={5.0}
                    type="UI/UX Design"
                    color="#e6fa9e"
                  />
                  <NewCourseCard
                    icon={<span role="img" aria-label="photography">📷</span>}
                    title="Photography"
                    lessons={8}
                    rate={4.6}
                    type="Art and Design"
                    color="#ecebfa"
                  />
                </div>
              </section>
              {/* Hours Activity & Daily Schedule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white rounded-2xl p-6 shadow"><HoursActivity /></section>
                <section className="bg-white rounded-2xl p-6 shadow"><DailySchedule /></section>
              </div>
              {/* Course You're Taking */}
              <section className="bg-white rounded-2xl p-6 shadow mt-6"><CourseTaking /></section>
            </div>
            {/* Right column (Calendar, Assignments) */}
            <div className="flex flex-col gap-6">
              <section className="bg-white rounded-2xl p-6 shadow"><CalendarWidget /></section>
              <section className="bg-white rounded-2xl p-6 shadow"><AssignmentsWidget /></section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
