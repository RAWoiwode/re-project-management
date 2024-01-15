import Sidebar from "./components/Sidebar";
import image from "./assets/no-projects.png";
import CreateProjectForm from "./components/CreateProjectForm";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <div className="w-2/3 mt-24 text-center">
        {/* <img
          className="w-16 mx-auto object-contain"
          src={image}
          alt="No projects images"
        />
        <h2 className="text-xl font-bold text-stone-500 mb-2">
          No Projects Selected
        </h2>
        <p className="text-stone-400 mb-6">
          Select a project of get started with a new one
        </p>
        <button className="bg-stone-800 text-stone-400 px-4 py-2 rounded-md">
          Create new project
        </button> */}
        <CreateProjectForm />
      </div>
    </main>
  );
}

export default App;
