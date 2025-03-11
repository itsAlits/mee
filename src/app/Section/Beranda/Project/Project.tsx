import React from "react";
import { CardWithPic } from "@/app/Components/CardWithPic";

// Define the type for projects
interface ProjectType {
  title: string;
  src: string; // Change to appropriate type if using a video component
  description: string;
  date: string;
}

// Example project data
const projects: ProjectType[] = [
  {
    title: "HIMAIF Official Website",
    src: "/project_1.mp4",
    description:
      "The official website for the Informatics Student Association of Udayana University (HIMAIF) serves as a centralized platform to provide comprehensive information about the organization, its activities, and resources.",
    date: "March 16, 2023",
  },
  {
    title: "IBLIX",
    src: "/project_2.mp4",
    description:
      "The official website for the Informatics Student Association of Udayana University (HIMAIF) serves as a centralized platform to provide comprehensive information about the organization, its activities, and resources.",
    date: "February 27, 2025",
  },
];

export const Project = () => {
  return (
    <div className="py-24 container mx-auto px-4 lg:px-0 ">
      <div className="headline pb-10 lg:pb-20">
        <h2 className="text-gray-400 text-lg text-center lg:text-start lg:text-2xl">Let's See My Work</h2>
        <h1 className=" text-4xl lg:text-6xl font-semibold mt-2 text-center lg:text-start">My Projects</h1>
      </div>

      <div className="project grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <CardWithPic
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            date={project.date}
          />
        ))}
      </div>
    </div>
  );
};
