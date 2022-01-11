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
        className="inline text-2xl lg:text-3xl mr-3 hover:-translate-y-1
        hover:text-sky-600 dark:hover:text-black  ease-in duration-150"
      />
    </a>
  );

  const websiteIcon = (
    <a href={websiteLink} target="_blank">
      <FiExternalLink
        className="inline text-2xl lg:text-3xl hover:-translate-y-1
        hover:text-sky-600 dark:hover:text-black ease-in duration-150"
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
        className="mb-8 md:mb-0 border-4 border-black 
        lg:opacity-60 hover:opacity-100 hover:-translate-y-2 hover:drop-shadow-2xl  
        duration-150 bg-slate-100 
        dark:opacity-80 dark:hover:opacity-100 dark:bg-sky-400"
      >
        <div className="m-4 lg:m-8">
          <div className="flex justify-between items-end">
            <div className="text-3xl md:text-4xl lg:text-6xl">{logo}</div>
            <div className="">
              {hasGithub ? githubIcon : null}
              {hasWebsite ? websiteIcon : null}
            </div>
          </div>
          <div className="mt-6">
            <div className="font-semibold  lg:text-lg">{title}</div>
            <div
              className="flex justify-start items-center 
              gap-4 mt-4 text-sm lg:text-base"
            >
              {skills.map((skill) => {
                return (
                  <div className="" key={skill}>
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 text-justify text-sm lg:text-base">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
