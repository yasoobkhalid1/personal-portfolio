import Image from "next/image";

export default function Projects() {
  return (
    <div className="mt-56">
      <div className="text-center border-b-4 border-black">
        <div
          className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-green-400 p-2 px-4 inline-block mb-8"
        >
          Experience
        </div>
      </div>
      <div className="grid grid-cols-3 mt-16 ">
        <div className="col-span-1">
          <div className="drop-shadow-xl bg-slate-700 m-12 mr-16 p-8 contrast-125">
            <Image
              className=""
              src="/images/google-illustration.svg"
              alt="Google logo"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="col-span-2 leading-relaxed">
          <p className="mb-2 text-xl font-semibold">
            Software Engineer @{" "}
            <span
              className="underline decoration-[3px] underline-offset-4
            decoration-emerald-500"
            >
              Google
            </span>
          </p>
          <p className="mb-6 font-semibold">Aug 2022 - Current</p>
          <ul className="grid grid-cols-12">
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </li>
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </li>
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-16 ">
        <div className="col-span-1">
          <div className="drop-shadow-xl bg-slate-700 m-12 mr-16 p-8 contrast-125">
            <Image
              className=""
              src="/images/replate-illustration.png"
              alt="Replate logo"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="col-span-2 leading-relaxed">
          <p className="mb-2 text-xl font-semibold">
            Software Engineering Intern @{" "}
            <span
              className="underline decoration-[3px] underline-offset-4
            decoration-emerald-500"
            >
              Replate
            </span>
          </p>
          <p className="mb-6 font-semibold">Jun 2021 - Dec 2021</p>
          <ul className="grid grid-cols-12">
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </li>
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </li>
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-16 ">
        <div className="col-span-1">
          <div className="drop-shadow-xl bg-slate-700 m-12 mr-16 p-8 contrast-125">
            <Image
              className=""
              src="/images/walmart-illustration.svg"
              alt="Walmart logo"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="col-span-2 leading-relaxed">
          <p className="mb-2 text-xl font-semibold">
            Software Engineering Intern @{" "}
            <span
              className="underline decoration-[3px] underline-offset-4
            decoration-emerald-500"
            >
              Walmart Labs
            </span>
          </p>
          <p className="mb-6 font-semibold">Jun 2020 - Aug 2020</p>
          <ul className="grid grid-cols-12">
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </li>
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </li>
            <li className="col-span-1">{">"}</li>
            <li className="col-span-11 mb-4 ">
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
