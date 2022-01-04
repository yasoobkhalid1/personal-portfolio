import Image from "next/image";

export default function Contact() {
  return (
    <div className="mt-48 pt-12" id="Contact">
      <div className="text-center border-b-4 border-black">
        <div
          className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-pink-500 p-2 px-4 inline-block mb-8"
        >
          Contact Me
        </div>
      </div>
      <div className="mt-16 text-center mx-32">
        I'm always interested in learning about any new opportunities, so please
        don't hesitate to reach out. I'll do my best to get back to you as soon
        as possible!
      </div>
      <div className="flex justify-center">
        <a
          href="mailto:yasoobkhalid1@gmail.com"
          className="mt-20 border-4 border-black 
            p-3 px-6 bg-pink-400 hover:bg-white 
            ease-in duration-200"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
