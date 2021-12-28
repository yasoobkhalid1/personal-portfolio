import Image from "next/image";
import { FaUserGraduate } from "react-icons/fa";

export default function Education() {
  return (
    <div className="grid h-[60vh] grid-rows-4">
      <div className="row-span-1">
        <h2
          className="flex justify-center text-7xl tracking-tighter font-semibold 
          drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b 
          from-blue-800 to-blue-600"
        >
          Education
        </h2>
      </div>

      <div className="row-span-3 flex">
        <div className="grid grid-cols-3">
          <div className="col-span-1 drop-shadow-2xl">
            <Image
              src="/images/degree-illustration.svg"
              alt="Illustration of a degree document"
              width={300}
              height={300}
            />
          </div>

          <div className="col-span-2 flex justify-center">
            <div className="text-xl flex justify-around gap-4">
              <span className="pt-1">
                <FaUserGraduate />
              </span>
              <span className="underline">UC Berkeley</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
