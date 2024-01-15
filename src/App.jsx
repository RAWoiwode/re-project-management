import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";
import NoProject from "./components/NoProject";
import { useState } from "react";

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

  let content;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <CreateProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
