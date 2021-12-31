import Image from "next/image";

export default function Introduction() {
  return (
    <div className="my-36">
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
          className="tracking-tight leading-loose text-xl
          text-slate-700 drop-shadow-2xl text-center pt-12 px-30"
        >
          I'm a Software Engineer, currently working at{" "}
          <span
            className="underline underline-offset-4 decoration-2 
          font-medium decoration-blue-500"
          >
            Google
          </span>
          . <br />
          Previously, I interned at{" "}
          <span
            className="underline underline-offset-4 decoration-2 
          font-medium decoration-emerald-500"
          >
            RePlate
          </span>{" "}
          and{" "}
          <span
            className="underline underline-offset-4 decoration-2 
          font-medium decoration-purple-500"
          >
            Walmart Labs
          </span>
          .
        </div>
      </div>
    </div>
  );
}
