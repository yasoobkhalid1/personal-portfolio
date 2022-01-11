import Link from "next/link";
import { useState, useEffect } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  const [navbarOpened, setNavbarOpened] = useState(false);

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
          before:hover:visible before:hover:w-full flex
        "
        >
          {section.name}
        </a>
      </Link>
    );
  });

  const mobileLinks = sections.map((section) => {
    return (
      <div className={"justify-center" + (navbarOpened ? " flex" : " hidden")}>
        <Link href={section.link}>
          <a className="py-2">{section.name}</a>
        </Link>
      </div>
    );
  });

  const navbarButton = (
    <button
      className="text-xl p-1 border-2 border-slate-800 rounded
        dark:border-slate-200"
      onClick={() => setNavbarOpened(!navbarOpened)}
    >
      {navbarOpened ? <BsFillCaretDownFill /> : <FiMenu />}
    </button>
  );

  const darkModeButton = (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-1 border-2 border-slate-800 rounded
        dark:border-slate-200 "
    >
      {darkMode ? <FaRegSun /> : <FaRegMoon />}
    </button>
  );

  return (
    <div className="">
      <div
        className="hidden md:flex py-8 px-8 lg:px-0 lg:text-lg justify-between items 
        tracking-tight dark:text-slate-200"
      >
        {links}
        {darkModeButton}
      </div>
      <div className="">
        <div
          className="flex md:hidden py-8 px-8 justify-between
      dark:text-slate-200"
        >
          {navbarButton}
          {darkModeButton}
        </div>
        <div
          className="flex flex-wrap flex-col md:hidden
      dark:text-slate-200"
        >
          {mobileLinks}
        </div>
      </div>
    </div>
  );
}
