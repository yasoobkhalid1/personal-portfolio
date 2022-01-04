import Image from "next/image";

export default function Contact() {
  return (
    <div className="mt-56">
      <div className="text-center border-b-4 border-black">
        <div
          className="tracking-tight drop-shadow-2xl text-3xl
              font-semibold bg-pink-500 p-2 px-4 inline-block mb-8"
        >
          Contact
        </div>
      </div>
      <div className="mt-16 text-center mx-32">
        I'm always interested in learning about any new opportunities, so please
        don't hesitate to reach out. I'll do my best to get back to you as soon
        as possible!
      </div>
      <div className="mt-16 flex justify-center">Contact Me</div>
    </div>
  );
}
