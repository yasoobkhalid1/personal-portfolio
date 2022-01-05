import Image from "next/image";

export default function SingleExperienceSection({
  imgPath,
  imgAlt,
  occupation,
  company,
  duration,
  jobDescriptions,
}) {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-3 mt-16 ">
      <div className="col-span-1">
        <div
          className="drop-shadow-xl p-4 mr-8 lg:m-12 
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
        className="col-span-3 lg:col-span-2 leading-relaxed 
        dark:text-slate-200"
      >
        <p className="mb-2 text-lg lg:text-xl font-semibold lg:text-left">
          {occupation} @{" "}
          <span
            className="underline decoration-4 underline-offset-4
            decoration-emerald-500 dark:text-emerald-300 
            dark:decoration-emerald-300 dark:underline-offset-[6px]"
          >
            {company}
          </span>
        </p>
        <p className="mb-6 font-semibold lg:text-left">{duration}</p>
        <ul className="grid grid-cols-12">
          {jobDescriptions.map((jobDescription) => {
            return (
              <>
                <li className="col-span-1">{">"}</li>
                <li className="col-span-11 mb-4 ">{jobDescription}</li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
