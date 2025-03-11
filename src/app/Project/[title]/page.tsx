"use client"

import { useParams } from 'next/navigation'; // Correct import

const ProjectPage = () => {
  const { title } = useParams(); // Access the title from the URL

  return (
    <div className='py-24 container mx-auto px-4 lg:px-0'>
      <h1 className=" text-4xl lg:text-6xl font-semibold mt-2 text-center lg:text-start">{title}</h1>
      {/* Render additional project details based on the title */}
    </div>
  );
};

export default ProjectPage;