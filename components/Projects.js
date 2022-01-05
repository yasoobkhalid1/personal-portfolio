import Image from "next/image";
import Link from "next/link";
import ProjectsCard from "./ProjectsCard";
import { GrSystem } from "react-icons/gr";
import React, { useState } from "react";

export default function Projects() {
  const projects = [
    {
      isVisible: true,
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
    {
      isVisible: true,
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
    {
      isVisible: true,
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
    {
      isVisible: true,
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
    {
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
    {
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
    {
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
    {
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
    {
      logo: <GrSystem />,
      hasGithub: true,
      githubLink: "https://www.github.com",
      hasWebsite: true,
      websiteLink: "https://www.google.com",
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging ",
      skills: ["React", "JS", "FireBase"],
    },
  ];

  const initialCardsToShow = 4;
  const [expanded, setExpanded] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

  const showMore = () => {
    expanded
      ? (setExpanded(false),
        projects.map((project) => {
          project.isVisible = true;
        }))
      : setExpanded(true);
  };

  return (
    <div className="mt-48 pt-12" id="Projects">
      <div
        className="text-center border-b-4 border-black
        dark:border-sky-400"
      >
        <div
          className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-sky-400 p-2 px-4 inline-block mb-8"
          id="projects"
        >
          Personal Projects
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {projects.map((project) => {
          const { isVisible, ...otherProps } = { ...project };
          return (
            <ProjectsCard {...otherProps} isVisible={isVisible || expanded} />
          );
        })}
      </div>

      <div className="flex justify-center">
        <a
          href="#Projects"
          className="mt-20 border-4 border-black 
            p-3 px-6 bg-sky-400 hover:bg-white 
            ease-in duration-200 dark:border-sky-400
            dark:text-sky-400 dark:bg-slate-900
            dark:hover:bg-sky-400 dark:hover:text-slate-900"
          onClick={showMore}
        >
          {expanded ? "Show Less" : "Show More"}
        </a>
      </div>
    </div>
  );
}
