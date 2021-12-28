import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex h-[40vh] items-center justify-center">
      <div className="">
        <h1 className="tracking-[-0.1em] font-medium text-center drop-shadow-2xl">
          <span className="text-8xl pr-4">Hi. </span>
          <span className="text-8xl">
            I'm{" "}
            <span
              className="font-semibold text-transparent 
            bg-clip-text bg-gradient-to-t from-rose-500 to-rose-700"
            >
              Yasoob
            </span>
            .
          </span>
        </h1>

        <div
          className="tracking-tight leading-relaxed text-xl font-normal 
          text-slate-700 drop-shadow-2xl text-center pt-12 px-48"
        >
          I'm a Software Engineer, currently working at{" "}
          <span
            className="underline underline-offset-2 decoration-2 
          font-medium decoration-blue-500"
          >
            Google
          </span>
          . <br />
          Previously, I interned at{" "}
          <span
            className="underline underline-offset-2 decoration-2 
          font-medium decoration-emerald-500"
          >
            RePlate
          </span>{" "}
          and{" "}
          <span
            className="underline underline-offset-2 decoration-2 
          font-medium decoration-purple-500"
          >
            Walmart Labs
          </span>
          .
          <br />
          <br />
          In my free time, I love to read novels - with Classics and Sci-Fi
          being my favorites!
        </div>
      </div>
    </div>
  );
}
