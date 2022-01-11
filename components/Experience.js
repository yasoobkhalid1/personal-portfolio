import SingleExperienceSection from "./SingleExperienceSection";

export default function Experience() {
  const experiences = [
    {
      imgPath: "/images/google-illustration.svg",
      imgAlt: "Google logo",
      occupation: "Software Engineer",
      company: "Google",
      duration: "Aug 2022 - Current",
      jobDescriptions: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      imgPath: "/images/replate-illustration.png",
      imgAlt: "Replate logo",
      occupation: "Software Engineering Intern",
      company: "Replate",
      duration: "Jun 2021 - Dec 2021",
      jobDescriptions: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      imgPath: "/images/walmart-illustration.svg",
      imgAlt: "Walmart logo",
      occupation: "Software Engineering Intern",
      company: "Walmart Labs",
      duration: "Jun 2020 - Aug 2020",
      jobDescriptions: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
  ];

  return (
    <div className="mt-32 md:mt-48 pt-12 mx-12 lg:mx-0" id="Experience">
      <div
        className="text-center border-b-4 border-black
        dark:border-green-400"
      >
        <div
          className="tracking-tight drop-shadow-2xl text-3xl
          font-semibold bg-green-400 p-2 px-4 inline-block mb-8"
        >
          Experience
        </div>
      </div>
      {experiences.map((experience) => {
        return <SingleExperienceSection {...experience} />;
      })}
    </div>
  );
}
