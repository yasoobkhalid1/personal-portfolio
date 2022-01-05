import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectsCard({
  isVisible,
  logo,
  hasGithub,
  githubLink,
  hasWebsite,
  websiteLink,
  title,
  description,
  skills,
}) {
  const githubIcon = (
    <a href={githubLink} target="_blank">
      <FiGithub
        className="inline text-3xl mr-3 hover:-translate-y-1 
        hover:text-orange-500 ease-in duration-150"
      />
    </a>
  );

  const websiteIcon = (
    <a href={websiteLink} target="_blank">
      <FiExternalLink
        className="inline text-3xl hover:-translate-y-1 
        hover:text-orange-500 ease-in duration-150"
      />
    </a>
  );

  return (
    <div
      className={`basis-[45%] ${
        isVisible
          ? "opacity-100 transition-opacity duration-500 ease-in"
          : "absolute overflow-hidden h-0 opacity-0 "
      }`}
    >
      <div
        className="border-4 border-black 
        opacity-60 hover:opacity-100 hover:-translate-y-2 hover:drop-shadow-2xl  
        duration-150"
      >
        <div className="m-8 grid grid-rows-5">
          <div className="row-span-1 flex justify-between items-end ">
            <div className="text-6xl">{logo}</div>
            <div className="">
              {hasGithub ? githubIcon : null}
              {hasWebsite ? websiteIcon : null}
            </div>
          </div>
          <div className="row-span-2 mt-6">
            <div className="font-semibold text-lg ">{title}</div>
            <div className="flex justify-start items-center gap-4 mt-4">
              {skills.map((skill) => {
                return <div className="">{skill}</div>;
              })}
            </div>
          </div>
          <div className="row-span-2 my-4 text-justify">{description}</div>
        </div>
      </div>
    </div>
  );
}
