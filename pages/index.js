import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Head from "next/head";

import NavBar from "../components/NavBar";
import Introduction from "../components/Introduction";
import Education from "../components/Education";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const components = [
    { component: NavBar, threshold: 0.25, initialOpacity: 1 },
    { component: Introduction, threshold: 0.25, initialOpacity: 1 },
    { component: About, threshold: 0.25, initialOpacity: 0 },
    { component: Education, threshold: 0.25, initialOpacity: 0 },
    { component: Experience, threshold: 0.25, initialOpacity: 0 },
    { component: Projects, threshold: 0.25, initialOpacity: 0 },
    { component: Contact, threshold: 0.25, initialOpacity: 0 },
    { component: Footer, threshold: 0.25, initialOpacity: 0 },
  ];

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* End Font Imports */}
      </Head>

      <div
        className="min-h-screen dark:bg-slate-900 
        ease-out duration-300 font-mono"
      >
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          {components.map((singleComponent) => {
            return (
              <InView threshold={singleComponent.threshold}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: singleComponent.initialOpacity }}
                    animate={
                      inView
                        ? { opacity: 1 }
                        : { opacity: singleComponent.initialOpacity }
                    }
                    transition={{ duration: 0.8 }}
                  >
                    <singleComponent.component />
                  </motion.div>
                )}
              </InView>
            );
          })}
        </div>
      </div>
    </div>
  );
}
