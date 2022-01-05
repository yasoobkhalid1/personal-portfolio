import Image from "next/image";

export default function About() {
  return (
    <div className="mt-56 pt-8" id="About">
      <div className="grid grid-cols-3 mt-8">
        <div className="col-span-2 mr-24 leading-relaxed ">
          <div
            className="pb-2 text-center mb-8 border-b-4 border-black
            dark:border-slate-200 dark:text-slate-900"
          >
            <div
              className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-rose-500 p-2 px-4 inline-block mb-6"
            >
              About Me
            </div>
          </div>
          <p className="mb-6 dark:text-slate-200">
            Hi, I'm{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px] 
            decoration-rose-500 dark:underline-offset-4 dark:decoration-rose-500"
            >
              Yasoob
            </span>
            , currently located in Mountain View, CA. I recently started my
            career as a new grad Software Engineer at{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px] 
            decoration-rose-500 dark:underline-offset-4 dark:decoration-rose-500"
            >
              Google
            </span>
            , where I'm currently working in the{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px] 
            decoration-rose-500 dark:underline-offset-4 dark:decoration-rose-500"
            >
              Youtube
            </span>{" "}
            product space.{" "}
          </p>
          <p className="mb-6 dark:text-slate-200">
            Previously, I have interned as a Software Engineering Intern at{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px] 
            decoration-rose-500 dark:underline-offset-4 dark:decoration-rose-500"
            >
              Walmart Labs
            </span>{" "}
            and{" "}
            <span
              className="underline decoration-[3px] underline-offset-[3px] 
            decoration-rose-500 dark:underline-offset-4 dark:decoration-rose-500"
            >
              Replate
            </span>{" "}
            .
          </p>

          <p className="mb-6 dark:text-slate-200">
            Here are some of the technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 dark:text-slate-200">
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
        <div className="col-span-1 pt-32">
          <div
            className="w-56 mb-10 relative before:absolute before:top-2 before:left-4
              before:w-full before:h-full before:bg-slate-200 dark:before:bg-rose-300"
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
