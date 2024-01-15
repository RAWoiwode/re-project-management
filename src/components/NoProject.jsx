import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProject = () => {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        className="w-16 mx-auto object-contain"
        src={noProjectImage}
        alt="No projects images"
      />
      <h2 className="text-xl font-bold text-stone-500 my-2">
        No Projects Selected
      </h2>
      <p className="text-stone-400 mb-6">
        Select a project of get started with a new one
      </p>
      <Button>Create new project</Button>
    </div>
  );
};

export default NoProject;
