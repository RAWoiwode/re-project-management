import React from "react";
import Button from "./Button";

const Sidebar = ({
  onSelectProject,
  onAddProject,
  projects,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-slate-950 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let classes =
            "w-full text-left px-2 py-1 rounded-sm hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={classes}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
