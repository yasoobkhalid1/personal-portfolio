import Image from "next/image";

export default function Education() {
  return (
    <div className="mt-56">
      <div className="grid grid-cols-3 mt-8">
        <div className="col-span-1 pt-32">
          <div
            className="w-56 mb-10 opacity-75 ease-linear duration-150
              hover:opacity-100"
          >
            <Image
              className=""
              src="/images/uni-illustration.svg"
              alt="Personal image of Yasoob"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="col-span-2 mr-24 leading-relaxed ">
          <div className="pb-2 text-center mb-8 border-b-4 border-black">
            <div
              className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-sky-400 p-2 px-4 inline-block mb-6"
            >
              Education
            </div>
          </div>
          <p className="mb-6">
            I finished my{" "}
            <span className="underline decoration-[3px] underline-offset-[3px] decoration-sky-400">
              B.A. in Computer Science
            </span>{" "}
            a few months ago, graduating{" "}
            <span className="italic">cum laude</span> from{" "}
            <span className="underline decoration-[3px] underline-offset-[3px] decoration-sky-400">
              UC Berkeley
            </span>{" "}
            (Class of 2022) with a{" "}
            <span className="underline decoration-[3px] underline-offset-[3px] decoration-sky-400">
              3.85 GPA
            </span>
            .
          </p>
          <p className="mb-6">
            At Berkeley, I had the privilege of being part of the{" "}
            <span className="underline decoration-[3px] underline-offset-[3px] decoration-sky-400">
              EECS Honors Program
            </span>
            , where my research focused on exploring the applications of Machine
            Learning for Computer Vision tasks.
          </p>
          <p className="mb-6">
            Moreover, I'm a proud laureate of{" "}
            <span className="underline decoration-[3px] underline-offset-[3px] decoration-sky-400">
              Upsilon Pi Epsilon (UPE)
            </span>
            , the Berkeley CS Honors Society, with invitation-only acceptance
            for the top CS students of each year's graduating class.
          </p>
        </div>
      </div>
    </div>
  );
}
