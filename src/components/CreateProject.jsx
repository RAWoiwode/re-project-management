import React from "react";
import Input from "./Input";

const CreateProjectForm = () => {
  return (
    <div>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} />
        <Input label={"Description"} isTextArea />
        <Input label={"Due Date"} type="date" />
      </div>
    </div>
  );
};

export default CreateProjectForm;