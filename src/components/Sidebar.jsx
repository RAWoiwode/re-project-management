import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-slate-950 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8  font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button className="px-4 py-3 bg-stone-800 text-stone-400 rounded-md">
        + Add Project
      </button>
    </aside>
  );
};

export default Sidebar;