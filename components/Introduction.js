import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex h-[90vh] items-center justify-around">
      <h1 className="font-medium space-y-8">
        <div className="text-7xl">Hi.</div>
        <div className="text-8xl">
          I'm <span className="font-semibold">Yasoob</span>.
        </div>
      </h1>

      <div className="flex items-start">
        <Image
          src="/images/personal-image.jpg"
          alt="Picture of Yasoob"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
