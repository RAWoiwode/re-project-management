import React from "react";

const Input = ({ label, isTextArea = false, ...props }) => {
  return (
    <p>
      <label className="uppercase text-sm font-bold text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
        />
      ) : (
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
        />
      )}
    </p>
  );
};

export default Input;
