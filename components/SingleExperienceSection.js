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
    <div className="grid grid-cols-3 mt-16 ">
      <div className="col-span-1">
        <div className="drop-shadow-xl m-12 mr-16 p-8 contrast-125">
          <Image
            className=""
            src={imgPath}
            alt={imgAlt}
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="col-span-2 leading-relaxed">
        <p className="mb-2 text-xl font-semibold">
          {occupation} @{" "}
          <span
            className="underline decoration-[3px] underline-offset-4
            decoration-emerald-500"
          >
            {company}
          </span>
        </p>
        <p className="mb-6 font-semibold">{duration}</p>
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
