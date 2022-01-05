import Image from "next/image";

export default function Education() {
  return (
    <div className="mt-48 pt-8" id="Education">
      <div className="grid grid-cols-3 mt-8">
        <div className="col-span-1 pt-32">
          <div className="w-48 drop-shadow-xl dark:hidden">
            <Image
              className=""
              src="/images/uni-illustration.svg"
              alt="Dark Logo of UC Berkeley"
              width={500}
              height={500}
            />
          </div>
          <div className="w-48 drop-shadow-xl hidden dark:block">
            <Image
              className=""
              src="/images/uni-dark-illustration.svg"
              alt="Dark Logo of UC Berkeley"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="col-span-2 leading-relaxed ">
          <div
            className="pb-2 text-center mb-8 border-b-4 border-black
            dark:border-slate-200"
          >
            <div
              className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-amber-500 p-2 px-4 inline-block mb-6"
            >
              Education
            </div>
          </div>
          <p className="mb-6 dark:text-slate-200">
            I finished my{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px]
            decoration-orange-400 dark:underline-offset-4"
            >
              B.A. in Computer Science
            </span>{" "}
            a few months ago, graduating{" "}
            <span className="italic">cum laude</span> from{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px]
            decoration-orange-400 dark:underline-offset-4"
            >
              UC Berkeley
            </span>{" "}
            (Class of 2022) with a{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px]
            decoration-orange-400 dark:underline-offset-4"
            >
              3.85 GPA
            </span>
            .
          </p>
          <p className="mb-6 dark:text-slate-200">
            At Berkeley, I had the privilege of being part of the{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px]
            decoration-orange-400 dark:underline-offset-4"
            >
              EECS Honors Program
            </span>
            , where my research focused on exploring the applications of Machine
            Learning for Computer Vision tasks.
          </p>
          <p className="mb-6 dark:text-slate-200">
            Moreover, I'm a proud laureate of{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px]
            decoration-orange-400 dark:underline-offset-4"
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
