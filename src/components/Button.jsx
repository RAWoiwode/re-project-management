import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-3 bg-stone-800 text-stone-400 rounded-md text-xs md:text-base hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
