import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

export default function Footer() {
  return (
    <div className="mt-56">
      <div className="border-b-4 border-black mb-16"></div>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="text-lg font-semibold bg-rose-500 inline p-2 px-4">
            Yasoob Khalid Niazi
          </div>
          <div className="mt-6">
            <FiGithub
              className="inline text-4xl border-[3px]
              hover:-translate-y-1 hover:border-rose-600 hover:text-rose-600
              ease-in duration-150 border-black rounded-lg mr-3 p-[0.4rem]"
            />
            <FaLinkedinIn
              className="inline text-4xl border-[3px]
              hover:-translate-y-1 hover:border-rose-600 hover:text-rose-600
              ease-in duration-150 border-black rounded-lg mr-3 p-[0.4rem]"
            />
            <FiMail
              className="inline text-4xl border-[3px]
              hover:-translate-y-1 hover:border-rose-600 hover:text-rose-600
              ease-in duration-150 border-black rounded-lg mr-3 p-[0.4rem]"
            />
            <CgFileDocument
              className="inline text-4xl border-[3px]
              hover:-translate-y-1 hover:border-rose-600 hover:text-rose-600
              ease-in duration-150 border-black rounded-lg mr-3 p-[0.4rem]"
            />
          </div>
          <div className="mt-8 text-sm">
            Designed and Built by Yasoob Khalid Niazi. <br />
            Last updated on Jan 4th 2021.
          </div>
          <div className="mt-6 mb-12 text-sm">
            <span className="text-xl">©</span> 2021-present. All Rights
            Reserved.
          </div>
        </div>
        <div className="">
          <div className="text-lg font-semibold text-center">Navigation</div>
          <ul className="grid grid-cols-2 mt-8 justify-items-center">
            <div className="col-span-1">
              <li className="mt-1">Home</li>
              <li className="mt-1">About Me</li>
              <li className="mt-1">Education</li>
            </div>
            <div className="col-span-1">
              <li className="mt-1">Experience</li>
              <li className="mt-1">Personal Projects</li>
              <li className="mt-1">Contact Me</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
