import Image from "next/image";

export default function About() {
  return (
    <div className="font-mono">
      <div className="grid grid-cols-3 mr-96 pb-6 border-b-4 border-black">
        <div className="col-span-1">
          <h2
            className="tracking-tight text-center drop-shadow-2xl text-3xl
              font-semibold col-span-2 bg-rose-500 p-2 
              "
          >
            About Me
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8">
        <div className="col-span-2 mr-24 leading-relaxed">
          <p className="mb-6">
            Hi, I'm{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              Yasoob
            </span>
            , currently located in Mountain View, CA. I recently started my
            career as a new grad Software Engineer at{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              Google
            </span>
            , where I'm currently working in the{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              Youtube
            </span>{" "}
            product space.{" "}
          </p>
          <p className="mb-6">
            Previously, I interned as a Software Engineering Intern at{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              Walmart Labs
            </span>{" "}
            for Summer '20 and at{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              Replate
            </span>{" "}
            for Summer '21 and Fall '21.
          </p>
          <p className="mb-6">
            Only a few months ago, I finished my{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              B.A. in Computer Science
            </span>
            , graduating <span className="italic">cum laude</span> from{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              UC Berkeley
            </span>{" "}
            (Class of 2022) with a{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              3.85 GPA
            </span>
            .
          </p>
          <p className="mb-6">
            At Berkeley, I had the privilege of being part of the{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              EECS Honors Program
            </span>
            , where my research focused on exploring the applications of Machine
            Learning for Computer Vision tasks.
          </p>
          <p className="mb-6">
            Moreover, I'm a proud laureate of{" "}
            <span className="underline decoration-2 underline-offset-[3px] decoration-rose-500">
              Upsilon Pi Epsilon (UPE)
            </span>
            , the Berkeley CS Honors Society, with invitation-only acceptance
            for the top CS students of each year's graduating class.
          </p>
          <p className="mb-6">
            Here are some of the technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2">
            <div className="col-span-1">
              <li className="before:content-['>'] before:mr-5">JavaScript</li>
              <li className="before:content-['>'] before:mr-5">React</li>
              <li className="before:content-['>'] before:mr-5">Bootstrap</li>
            </div>
            <div className="col-span-1">
              <li className="before:content-['>'] before:mr-5">
                SQL (Postgres)
              </li>
              <li className="before:content-['>'] before:mr-5">MongoDB</li>
              <li className="before:content-['>'] before:mr-5">TensorFlow</li>
            </div>
          </ul>
        </div>
        <div className="col-span-1">
          <div
            className="opacity-75 ease-linear duration-150
              w-56 mb-10 relative before:absolute before:top-2 before:left-4
              before:w-full before:h-full before:bg-slate-300 
              hover:opacity-100 "
          >
            <Image
              className=""
              src="/images/personal-image.jpg"
              alt="Personal image of Yasoob"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
