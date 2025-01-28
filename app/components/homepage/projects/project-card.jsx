// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-64 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={project?.image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{project?.time}</p>
          <Link className='hover:text-violet-500 text-2xl' target='_blank' href={project.github}>
            <FaGithub />
          </Link>
        </div>
        <p className='my-2 lg:my-3 cursor-pointer text-lg text-cyan-400 sm:text-xl font-medium '>
          {project.title}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {project.description}
        </p>
        {/* <div className="flex justify-end self-end mt-6">
          <Link target='_blank' href={project.github}>
            <button className='bg-violet-500 text-white px-3 py-1.5 md:py-2.5 md:px-5 rounded-full text-xs md:text-sm'>
              View Project
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;