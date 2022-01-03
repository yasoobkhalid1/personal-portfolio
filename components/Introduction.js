import Image from "next/image";

export default function Introduction() {
  return (
    <div className="my-72 text-center">
      <div className="">
        <h1 className="tracking-[-0.1em] font-medium drop-shadow-2xl">
          <span className="text-8xl pr-4 leading-normal">Hi. </span>
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
          className="tracking-tight leading-loose text-xl
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
          </span>{" "}
          . <br />
          Previously, I have interned at{" "}
          <span
            className="underline underline-offset-4 decoration-[3px] 
          font-medium decoration-emerald-500"
          >
            RePlate
          </span>{" "}
          and{" "}
          <span
            className="underline underline-offset-4 decoration-[3px] 
          font-medium decoration-purple-500"
          >
            Walmart Labs
          </span>
          . <br />
          {/* TODO: Fill out contact me button */}
          Contact Me
        </div>
      </div>
    </div>
  );
}
