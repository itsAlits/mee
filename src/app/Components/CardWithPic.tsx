import Image from "next/image";
import React from "react";
import Link from "next/link";

export const CardWithPic = (props: {
  title: string;
  src: string;
  description: string;
  date: string;
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image rounded-xl h-[200px]  lg:h-[300px] overflow-hidden">
          <video src={props.src} autoPlay muted loop />
        </div>
        <div className="card-info mt-4 lg:mt-6 ">
          <p className="card-date text-gray-500">{props.date}</p>
          <h3 className="card-title text-2xl font-medium mt-2 lg:mt-4">
            {props.title}
          </h3>
          <p className="card-description font-normal text-justify mt-4 text-gray-500">
            {props.description.slice(0, 200)}
            {props.description.length > 200 ? "..." : ""}
          </p>
          <Link href={'/Project/' + props.title}>
            <div className="card-button flex gap-2 mt-4 hover:opacity-70">
              See Detail{" "}
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
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
