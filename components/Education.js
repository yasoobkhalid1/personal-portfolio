import Image from "next/image";

export default function Education() {
  return (
    <div className="mt-32 md:mt-48 pt-8 mx-12 lg:mx-0" id="Education">
      <div className="md:grid md:grid-cols-3 mt-8">
        <div
          className="md:col-span-1 md:pt-56 lg:pt-32 
          flex justify-center md:block mb-12 md:mb-0"
        >
          <div className="w-36 lg:w-48 drop-shadow-xl dark:hidden">
            <Image
              className=""
              src="/images/uni-illustration.svg"
              alt="Light Logo of UC Berkeley"
              width={500}
              height={500}
            />
          </div>
          <div className="w-36 drop-shadow-xl hidden dark:block">
            <Image
              className=""
              src="/images/uni-dark-illustration.svg"
              alt="Dark Logo of UC Berkeley"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="md:col-span-2 leading-relaxed">
          <div
            className="pb-2 text-center mb-8 border-b-4 border-black
            dark:border-amber-500"
          >
            <div
              className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-amber-500 p-2 px-4 inline-block mb-6"
            >
              Education
            </div>
          </div>
          <p className="mb-6 dark:text-slate-200 text-lg">
            I finished my{" "}
            <span
              className="text-orange-500 font-semibold 
              dark:text-orange-400"
            >
              B.A. in Computer Science
            </span>{" "}
            a few months ago, graduating{" "}
            <span className="italic">cum laude</span> from{" "}
            <span
              className="text-orange-500 font-semibold 
              dark:text-orange-400"
            >
              UC Berkeley
            </span>{" "}
            (Class of 2022) with a{" "}
            <span
              className="text-orange-500 font-semibold 
              dark:text-orange-400"
            >
              3.85 GPA
            </span>
            .
          </p>
          <p className="mb-6 dark:text-slate-200 text-lg">
            At Berkeley, I had the privilege of being part of the{" "}
            <span
              className="text-orange-500 font-semibold 
              dark:text-orange-400"
            >
              EECS Honors Program
            </span>
            , where my research focused on exploring the applications of Machine
            Learning for Computer Vision tasks.
          </p>
          <p className="mb-6 dark:text-slate-200 text-lg">
            Moreover, I'm a proud laureate of{" "}
            <span
              className="text-orange-500 font-semibold 
              dark:text-orange-400"
            >
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
