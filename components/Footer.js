import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { Fragment } from "react";

export default function Footer() {
  const icons = [
    { name: "FiGithub", icon: FiGithub, link: "https://github.com" },
    { name: "FaLinkedinIn", icon: FaLinkedinIn, link: "https://linkedin.com" },
    { name: "FiMail", icon: FiMail, link: "mailto:yasoobkhalid1@gmail.com" },
    {
      name: "CgFileDocument",
      icon: CgFileDocument,
      link: "/documents/Resume.pdf",
    },
  ];

  const sections = [
    { name: "Home", link: "#" },
    { name: "About Me", link: "#About" },
    { name: "Education", link: "#Education" },
    { name: "Experience", link: "#Experience" },
    { name: "Personal Projects", link: "#Projects" },
    { name: "Contact Me", link: "#Contact" },
  ];

  return (
    <div className="mt-56 pb-4 mx-12 lg:mx-0 ">
      <div
        className="border-b-4 border-black 
        mb-16 dark:border-rose-500"
      ></div>
      <div className="md:grid md:grid-cols-2">
        <div className="block md:hidden dark:text-slate-200 text-sm lg:text-base">
          <div className="text-base lg:text-lg font-semibold text-center">
            Navigation
          </div>
          <ul className="grid grid-cols-2 mt-8 mb-24 text-xs justify-items-center">
            <div className="col-span-1">
              {sections.slice(0, 3).map((section) => {
                return (
                  <Fragment key={section.name}>
                    <a href={section.link} className="">
                      <li className="mt-1">{section.name}</li>
                    </a>
                  </Fragment>
                );
              })}
            </div>
            <div className="col-span-1">
              {sections.slice(3, sections.length).map((section) => {
                return (
                  <Fragment key={section.name}>
                    <a href={section.link} className="">
                      <li className="mt-1">{section.name}</li>
                    </a>
                  </Fragment>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <div
            className="text-lg font-semibold bg-rose-500 inline p-2 
            px-4 dark:font-normal dark:border-4 dark:border-rose-500 
            dark:text-rose-500 dark:bg-slate-900"
          >
            Yasoob Khalid Niazi
          </div>
          <div className="mt-12 md:mt-6">
            {icons.map((singleIcon) => {
              return (
                <Fragment key={singleIcon.name}>
                  <a href={singleIcon.link}>
                    <singleIcon.icon
                      className="inline text-4xl border-[3px]
                      hover:-translate-y-1 hover:border-rose-600 hover:text-rose-600
                      ease-in duration-150 border-black rounded-lg mr-3 p-[0.4rem]
                      dark:border-rose-500 dark:text-rose-500 dark:hover:border-rose-600 
                      dark:hover:text-rose-600"
                    />
                  </a>
                </Fragment>
              );
            })}
          </div>
          <div className="mt-8 text-xs lg:text-sm dark:text-slate-300">
            Designed and Built by Yasoob Khalid.
          </div>
          <div className="mt-4 md:mt-0 text-xs lg:text-sm dark:text-slate-300">
            Last updated on Jan 4th 2021.
          </div>
          <div className="mt-4 lg:mt-6 pb-8 text-xs md:text-sm dark:text-slate-300">
            <span className="text-base md:text-xl">©</span> 2021-present. All
            Rights Reserved.
          </div>
        </div>
        <div className="hidden md:block dark:text-slate-200 text-sm lg:text-base">
          <div className="text-base lg:text-lg font-semibold text-center">
            Navigation
          </div>
          <ul className="grid grid-cols-2 mt-8 justify-items-center">
            <div className="col-span-1">
              {sections.slice(0, 3).map((section) => {
                return (
                  <Fragment key={section.name}>
                    <a href={section.link} className="">
                      <li
                        className="mt-1 hover:-translate-y-1 hover:underline
                        hover:underline-rose-600 hover:decoration-[3px] 
                        hover:underline-offset-[6px] hover:text-rose-600 ease-in 
                        duration-150 rounded-lg"
                      >
                        {section.name}
                      </li>
                    </a>
                  </Fragment>
                );
              })}
            </div>
            <div className="col-span-1">
              {sections.slice(3, sections.length).map((section) => {
                return (
                  <Fragment key={section.name}>
                    <a href={section.link} className="">
                      <li
                        className="mt-1 hover:-translate-y-1 hover:underline
                        hover:underline-rose-600 hover:decoration-[3px] 
                        hover:underline-offset-[6px] hover:text-rose-600 ease-in 
                        duration-150 rounded-lg"
                      >
                        {section.name}
                      </li>
                    </a>
                  </Fragment>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
