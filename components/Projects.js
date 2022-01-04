import Image from "next/image";
import ProjectsCard from "./ProjectsCard";
import { GrSystem } from "react-icons/gr";
import React, { useState } from "react";

export default function Projects() {
  const projects = [
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
    cardsToShow === initialCardsToShow
      ? (setCardsToShow(projects.length), setExpanded(true))
      : (setCardsToShow(initialCardsToShow), setExpanded(false));
  };

  return (
    <div className="mt-56">
      <div className="text-center border-b-4 border-black">
        <div
          className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-amber-500 p-2 px-4 inline-block mb-8"
        >
          Personal Projects
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {projects.slice(0, cardsToShow).map((project) => {
          return <ProjectsCard {...project} />;
        })}
      </div>

      <button className="ease-linear delay-1000" onClick={showMore}>
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
