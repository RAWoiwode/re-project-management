import Sidebar from "./components/Sidebar";
import CreateProjectForm from "./components/CreateProject";
import NoProject from "./components/NoProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      {/* <CreateProjectForm /> */}
      <NoProject />
    </main>
  );
}

export default App;
