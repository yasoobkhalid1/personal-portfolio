import Image from "next/image";
import { FaUserGraduate } from "react-icons/fa";

export default function Education() {
  return (
    <div className="flex h-[40vh] items-center justify-center">
      <div className="">
        <h2
          className="tracking-tighter text-center drop-shadow-2xl text-6xl
        font-semibold text-transparent bg-clip-text bg-gradient-to-t 
        from-blue-600 to-blue-800"
        >
          Education
        </h2>
        <div
          className="tracking-tight leading-relaxed text-xl font-normal 
          text-slate-700 drop-shadow-2xl text-center pt-12 px-48 "
        >
          <div>
            For my undergrad, I went to <span>UC Berkeley</span> (Class of '22),
            where I did my <span>B.A. in CS</span>, graduating{" "}
            <span>cum laude</span> with a <span>3.85 GPA</span>.
          </div>
          <div>
            I was a member of Berkeley's <span>EECS Honors Program</span>, where
            my research was focused on understanding the applications of{" "}
            <span>Machine Learning for Computer Vision</span> tasks.
          </div>
          <div>
            I'm also a proud laureate of <span>Upsilon Pi Epsilon (UPE)</span>,
            Berkeley's L&S CS Honors Society.
          </div>
        </div>
      </div>
    </div>
  );
}
