import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const CreateProject = ({ onSave, onCancel }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // Validate
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonText={"Close"}>
        <h2 className="text-xl font-bold text-stone-500 my-2">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Forgot to enter a value</p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide valid inputs.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label={"Title"} />
          <Input ref={descriptionRef} label={"Description"} isTextArea />
          <Input ref={dueDateRef} label={"Due Date"} type="date" />
        </div>
      </div>
    </>
  );
};

export default CreateProject;
