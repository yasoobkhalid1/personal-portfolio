import Image from "next/image";
import React, { Fragment } from "react";

export default function SingleExperienceSection({
  imgPath,
  imgAlt,
  occupation,
  company,
  duration,
  jobDescriptions,
}) {
  return (
    <div className="md:grid md:grid-cols-4 lg:grid-cols-3 mt-16">
      <div className="md:col-span-1 flex justify-center md:block">
        <div
          className="drop-shadow-xl p-4 md:mr-8 lg:m-12 
          lg:mr-16 lg:p-8 contrast-125"
        >
          <Image
            className=""
            src={imgPath}
            alt={imgAlt}
            width={150}
            height={150}
          />
        </div>
      </div>
      <div
        className="md:col-span-3 lg:col-span-2 leading-relaxed 
        dark:text-slate-200 "
      >
        <p
          className="my-8 md:my-0 md:mb-2 text-lg lg:text-xl font-semibold lg:text-left
          text-center md:text-left"
        >
          {occupation} @{" "}
          <span
            className="underline decoration-4 underline-offset-4
            decoration-emerald-500 dark:text-emerald-300 
            dark:decoration-emerald-300 dark:underline-offset-[6px]"
          >
            {company}
          </span>
        </p>
        <p className="mb-6 font-semibold lg:text-left text-center md:text-left">
          {duration}
        </p>
        <ul className="grid grid-cols-12">
          {jobDescriptions.map((jobDescription) => {
            return (
              <Fragment key={jobDescription}>
                <li className="col-span-1">{">"}</li>
                <li className="col-span-11 mb-4 md:text-left">
                  {jobDescription}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
