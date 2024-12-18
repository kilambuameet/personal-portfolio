import React from "react";

const Buttons = ({ title, className }) => {
  return (
    <button
      className={` font-bold py-2 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none ${className}`}
    >
      {title}
    </button>
  );
};

export default Buttons;
