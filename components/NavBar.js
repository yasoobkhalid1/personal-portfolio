import Link from "next/link";

export default function NavBar() {
  const sections = [
    { name: "Home", link: "#" },
    { name: "About", link: "#About" },
    { name: "Education", link: "#Education" },
    { name: "Experience", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#Contact" },
    { name: "Resume", link: "/documents/Resume.pdf" },
  ];
  const links = sections.map((section) => {
    return (
      <Link href={section.link}>
        <a
          className="group-hover:opacity-50 group-hover:hover:opacity-100 
          ease-in duration-100 relative before:absolute before:w-0 before:h-1 
          before:-bottom-1 before:left-0 before:bg-rose-500 before:invisible 
          before:transition-all before:delay-100 before:ease-in-out
          before:hover:visible before:hover:w-full
        "
        >
          {section.name}
        </a>
      </Link>
    );
  });

  return (
    <div className="my-8 text-lg flex justify-between group tracking-tight">
      {links}
    </div>
  );
}
