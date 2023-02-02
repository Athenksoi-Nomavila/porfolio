import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import athi from "../public/avatar.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Athenkosi Nomavila Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gradient-to-b from-blue-300 text- to-cyan-600 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section>
          <nav className="py-10  flex justify-between dark:text-white">
          <div className="text-4xl flex justify-center gap-10 pl-5  py-3 text-gray-800 dark:text-gray-400">
              <a href="https://github.com/Athenksoi-Nomavila/porfolio">
                <AiFillGithub />
              </a>

              <a href="https://www.linkedin.com/in/athenkosi-nomavila">
                <AiFillLinkedin />
              </a>
            </div>
            <ul className="text-4xl flex justify-center pr-5 py-3">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center shadow-xl p-10 py-10">
            <h2 className="text-5xl py-2 text-blue-500 font-medium dark:text-teal-400 md:text-6xl">
              Athenkosi Nomavila
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Fullstack Developer.
            </h3>
            <div className="mx-auto shadow-xl bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={athi} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section>
          <div className="text-center shadow-xl">
            <div className="text-center  p-10 py-10">
              <h2 className="text-5xl pt-20 py-2 font-medium dark:text-teal-400 md:text-6xl">
                About
              </h2>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a young software developer who is looking to
              challenge himself in different parts of his life. I am awaiting
              graduation from We Think Code after studying software Development.
              I chose a career in software development as a result of my
              interest in tech and my hunger to have an impact in the world. I
              have been exposed to different kinds of people who have vastly
              different perspectives. I believe in a sense of community and
              teamwork and that could be adopted and used to better the
              workplace, South Africa, and beyond.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
