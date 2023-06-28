import React from "react";

function Button({ children, disabled }) {
  return (
    <div
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-500 px-4 py-3 
      font-semibold uppercase tracking-wide text-stone-800 transition-all 
      duration-300 hover:bg-yellow-300 focus:outline-none focus:ring 
      focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed 
      md:px-6 md:py-4"
    >
      {children}
    </div>
  );
}

export default Button;
