export default function Introduction() {
  return (
    <div className="my-32 md:my-56 lg:my-72 text-center font-slab">
      <div className="">
        <h1
          className="tracking-tight font-medium drop-shadow-2xl 
          dark:text-slate-100 text-6xl md:text-7xl lg:text-8xl
          leading-normal md:leading-none"
        >
          <span className=" pr-4 leading-normal">Hi. </span>
          <span className="">
            I'm{" "}
            <span
              className="font-semibold bg-rose-500 px-8
              dark:text-black"
            >
              Yasoob
            </span>
            .
          </span>
        </h1>

        <div
          className="text-slate-700 drop-shadow-2xl 
          pt-16 px-8 md:px-0 md:pt-8 dark:text-slate-200 lg:leading-loose lg:text-xl 
          px-30 leading-loose"
        >
          I'm a Full Stack Software Engineer, currently working on{" "}
          <span
            className="underline underline-offset-4 decoration-[3px] 
            font-medium decoration-red-600 dark:underline-offset-[6px]
            dark:font-normal"
          >
            Youtube
          </span>{" "}
          at{" "}
          <span
            className="underline underline-offset-4 decoration-[3px] 
          font-medium decoration-blue-500 dark:underline-offset-[6px]
          dark:font-normal"
          >
            Google
          </span>
          .
          <div className="pt-8 md:pt-0">
            I love to read and have recently gotten into{" "}
            <span
              className="underline underline-offset-4 decoration-[3px] 
          font-medium decoration-green-500 dark:underline-offset-[6px]
          dark:font-normal"
            >
              writing
            </span>{" "}
            about cool stuff that interests me.
          </div>
        </div>
        <div className="flex justify-evenly">
          <a
            href="mailto:yasoobkhalid1@gmail.com"
            className="mt-36 font-mono lg:text-2xl border-4 border-black 
            inline-block p-3 px-6 bg-amber-400 hover:bg-white 
            ease-in duration-200 dark:border-amber-400 
            dark:text-amber-400 dark:bg-slate-900 
            dark:hover:bg-amber-400 dark:hover:text-slate-900"
          >
            Contact Me
          </a>
          <a
            href="/documents/Resume.pdf"
            className="mt-36 font-mono lg:text-2xl border-4 border-black 
            inline-block p-3 px-6 bg-emerald-400 hover:bg-white 
            ease-in duration-200 dark:border-emerald-300 
            dark:text-emerald-300 dark:bg-slate-900 
            dark:hover:bg-emerald-300 dark:hover:text-slate-900"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
