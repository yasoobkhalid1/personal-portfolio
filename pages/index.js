import Head from "next/head";

import NavBar from "../components/NavBar";
import Introduction from "../components/Introduction";
import Education from "../components/Education";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="">
      <Head>
        {/* Site Metadata */}
        <title>Yasoob Khalid | Software Engineer</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Yasoob Khalid Niazi" />
        <meta
          name="description"
          content="Yasoob Khalid Niazi's personal home page, created to provide an up-to-date overview of 
          their current education level, skillset, career and academic experience, personal projects, and 
          contact details. The site also contains a link to their personal blog where they regularly write 
          articles on the books they are reading, the technologies they are learning, and the cool stuff 
          they are doing!"
        />
        {/* End Site Metadata */}

        {/* Favicon Imports */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#064663"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#064663" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#064663" />
        {/* End Favicon Imports */}

        {/* Font Imports */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200..700&family=Roboto+Mono:wght@200..700&display=swap"
          rel="stylesheet"
        />
        {/* End Font Imports */}
      </Head>

      <div className="min-h-screen bg-zinc-50/25 font-mono">
        <div className="max-w-4xl mx-auto">
          <NavBar />
          <Introduction />
          <About />
          <Education />
          <Experience />
        </div>
      </div>
    </div>
  );
}
