import Image from "next/image";

export default function About() {
  return (
    <div className="mt-56 pt-8 mx-12 lg:mx-0" id="About">
      <div className="flex justify-center md:hidden mb-12">
        <div className="w-56 mb-10">
          <Image
            className="rounded-md"
            src="/images/personal-image.jpg"
            alt="Personal image of Yasoob"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 mt-8">
        <div className="md:col-span-2 md:mr-24 leading-relaxed ">
          <div
            className="pb-2 text-center mb-8 border-b-4 border-black
            dark:border-rose-500 dark:text-slate-900"
          >
            <div
              className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-rose-500 p-2 px-4 inline-block mb-6"
            >
              About Me
            </div>
          </div>
          <p className="mb-6 dark:text-slate-200 text-lg">
            Hi, I'm <span className="text-rose-500 font-semibold ">Yasoob</span>
            , currently located in Mountain View, CA. I recently started my
            career as a new grad Software Engineer at{" "}
            <span className="text-rose-500 font-semibold ">Google</span>, where
            I'm currently working in the{" "}
            <span className="text-rose-500 font-semibold ">Youtube</span>{" "}
            product space.{" "}
          </p>
          <p className="mb-6 dark:text-slate-200 text-lg">
            Previously, I have interned as a Software Engineering Intern at{" "}
            <span className="text-rose-500 font-semibold ">Walmart Labs</span>{" "}
            and <span className="text-rose-500 font-semibold ">Replate</span>.
          </p>

          <p className="mb-6 dark:text-slate-200 text-lg">
            Here are some of the technologies I've been working with recently:
          </p>
          <ul className="md:grid md:grid-cols-2 dark:text-slate-200">
            <div className="md:col-span-1">
              <li className="before:content-['>'] before:mr-5">JavaScript</li>
              <li className="before:content-['>'] before:mr-5">React</li>
              <li className="before:content-['>'] before:mr-5">Bootstrap</li>
            </div>
            <div className="md:col-span-1">
              <li className="before:content-['>'] before:mr-5">
                SQL (Postgres)
              </li>
              <li className="before:content-['>'] before:mr-5">MongoDB</li>
              <li className="before:content-['>'] before:mr-5">TensorFlow</li>
            </div>
          </ul>
        </div>
        <div className="md:col-span-1 pt-32 hidden md:block">
          <div
            className="w-56 mb-10 relative lg:before:absolute lg:before:top-2 
            lg:before:left-4 lg:before:w-full lg:before:h-full 
            lg:before:bg-slate-200 dark:lg:before:bg-rose-300"
          >
            <Image
              className="md:rounded-md lg:rounded-none"
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
