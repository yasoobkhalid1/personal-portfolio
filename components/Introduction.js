import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex h-[60vh] grid-cols-3 items-center justify-between">
      <div className="">
        <h1 className="tracking-[-0.1em] font-medium space-y-8 max-w-xl">
          <div className="text-7xl drop-shadow-2xl">Hi.</div>
          <div className="text-8xl">
            I'm{" "}
            <span
              className=" font-semibold drop-shadow-2xl text-transparent 
            bg-clip-text bg-gradient-to-t from-rose-500 to-rose-700"
            >
              Yasoob
            </span>
            .
          </div>
        </h1>

        <div className="tracking-tight leading-relaxed text-lg max-w-md pl-2 pt-12 font-normal text-slate-700 drop-shadow-2xl">
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

      <div className="drop-shadow-2xl">
        <Image
          src="/images/nomad-illustration.svg"
          alt="Illustration of a man"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
