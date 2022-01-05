import Link from "next/link";
import { useState, useEffect } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const sections = [
    { name: "Home", link: "#" },
    { name: "About", link: "#About" },
    { name: "Education", link: "#Education" },
    { name: "Experience", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#Contact" },
    { name: "Resume", link: "/documents/Resume.pdf" },
    { name: "Blog", link: "https://blog.yasoobk.com" },
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
    <div
      className="py-8 text-lg flex justify-between items-end group 
      tracking-tight dark:text-slate-200"
    >
      {links}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-xl p-1 border-2 border-slate-800 rounded
        hover:bg-slate-800 hover:text-slate-200 ease-out duration-200
        dark:border-slate-200  dark:hover:bg-slate-200 
        dark:hover:text-slate-800 dark:ease-out dark:duration-500"
      >
        {darkMode ? <FaRegSun /> : <FaRegMoon />}
      </button>
    </div>
  );
}
