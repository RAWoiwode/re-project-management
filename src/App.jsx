import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";
import NoProject from "./components/NoProject";
import { useState } from "react";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleAddProject = () => {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  };

  const handleSaveAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: id };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <ProjectDetails project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <CreateProject
        onSave={handleSaveAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onSelectProject={handleSelectProject}
        onAddProject={handleAddProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
