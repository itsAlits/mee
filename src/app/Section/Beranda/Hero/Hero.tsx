import React from "react";

export const Hero = () => {
  return (
    <div className="px-4 lg:px-0 container mx-auto pt-40 pb-24">
      
      <div className="text-center lg:text-start ">
        <h1 className="text-lg lg:text-2xl text-gray-800">Hello! I'm Ngakan Alit</h1>
        <h1 className="lg:text-9xl text-5xl font-semibold mt-6  text-gray-800">
          Turning UI concepts <br className=" hidden lg:block" /> into
          interactive <span className="text-gray-400">web experiences</span>
        </h1>
        <button className="btn btn-neutral px-7 py-6 mt-10 lg:mt-20 rounded-full">
          Lets Talks{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
