import Image from "next/image";

export default function Introduction() {
  return (
    <div className="my-72 text-center font-slab dark:text-white">
      <div className="">
        <h1 className="tracking-[-0.1em] font-medium drop-shadow-2xl">
          <span className="text-8xl pr-4 leading-normal">Hi. </span>
          <span className="text-8xl">
            I'm <span className="font-semibold bg-rose-500 px-8">Yasoob</span>.
          </span>
        </h1>

        <div
          className="leading-loose text-xl
          text-slate-700 drop-shadow-2xl pt-8 px-30"
        >
          I'm a Full Stack Software Engineer, currently working on{" "}
          <span
            className="underline underline-offset-4 decoration-[3px] 
          font-medium decoration-red-600"
          >
            Youtube
          </span>{" "}
          at{" "}
          <span
            className="underline underline-offset-4 decoration-[3px] 
          font-medium decoration-blue-500"
          >
            Google
          </span>
          .
          <br />I love to read and have recently gotten into{" "}
          <span
            className="underline underline-offset-4 decoration-[3px] 
          font-medium decoration-green-500"
          >
            writing
          </span>{" "}
          about cool stuff that interests me.
        </div>
        <div className="flex justify-evenly">
          <a
            href="mailto:yasoobkhalid1@gmail.com"
            className="mt-36 font-mono text-2xl border-4 border-black 
            inline-block p-3 px-6 bg-amber-400 hover:bg-white 
            ease-in duration-200"
          >
            Contact Me
          </a>
          <a
            href="/documents/Resume.pdf"
            className="mt-36 font-mono text-2xl border-4 border-black 
            inline-block p-3 px-6 bg-emerald-400 hover:bg-white 
            ease-in duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
