import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-rows-6 my-32 font-mono">
      <div className="row-span-1">
        <div className="grid grid-cols-3">
          <div className="col-span-1 absolute">
            <h2
              className="tracking-tight text-left drop-shadow-2xl text-4xl
              font-semibold text-transparent bg-clip-text bg-gradient-to-t 
              from-blue-600 to-blue-800 col-span-2 mb-8
              "
            >
              About Me
            </h2>
          </div>
          <div className="border-b-2 border-blue-200 my-5 ml-48 min-w-full"></div>
        </div>
      </div>
      <div className="row-span-5">
        <div className="grid grid-cols-3">
          <div className="col-span-2 pr-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            eget velit aliquet sagittis id. Ac turpis egestas integer eget
            aliquet. Vivamus at augue eget arcu dictum varius duis at. Vivamus
            arcu felis bibendum ut tristique et egestas. Consequat nisl vel
            pretium lectus. Tincidunt praesent semper feugiat nibh sed pulvinar
            proin gravida hendrerit. Dictum non consectetur a erat nam at.
            Ornare arcu odio ut sem nulla. Aenean pharetra magna ac placerat
            vestibulum lectus. Condimentum lacinia quis vel eros donec ac odio
            tempor orci. Nunc sed id semper risus in hendrerit gravida. Praesent
            semper feugiat nibh sed pulvinar proin. Convallis tellus id interdum
            velit laoreet. Egestas maecenas pharetra convallis posuere morbi leo
            urna molestie at. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere. Rhoncus urna neque viverra
            justo nec ultrices dui.
          </div>
          <div className="col-span-1">
            <div
              className="opacity-75 ease-linear duration-150
              w-56 mb-10 relative before:absolute before:top-2 before:left-4
              before:w-full before:h-full before:bg-slate-300 before:rounded-xl
              hover:opacity-100 "
            >
              <Image
                className="rounded-xl"
                src="/images/personal-image.jpg"
                alt="Personal image of Yasoob"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
