import Link from "next/link";

export default function NavBar() {
  const sections = ["Education", "Skills", "Experience", "Projects", "Resume"];
  const links = sections.map((section) => {
    return (
      <Link href={"#" + section}>
        <a className="text-slate-500 hover:text-slate-700 hover:underline hover:underline-offset-4">
          {section}
        </a>
      </Link>
    );
  });

  const logo = (
    <Link href="">
      <a>YKN</a>
    </Link>
  );

  return (
    <div className="flex justify-between my-8 font-roboto text-lg">
      <div className="text-slate-500 hover:text-slate-700  hover:underline hover:underline-offset-4">
        {logo}
      </div>
      <div className="flex space-x-10">{links}</div>
    </div>
  );
}
