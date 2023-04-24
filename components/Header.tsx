import React from "react";
import ThemeToggle from "./ThemeToggle";
import { FiGithub } from "react-icons/fi";
import { BiCommand } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex w-full flex-col mb-4">
      <nav className="flex gap-4 items-center py-4 px-6 sm:px-16 lg:max-w-7xl w-full mx-auto ">
        {/* logo */}
        <div className="sm:text-xl text-lg flex items-center gap-1 font-semibold">
          <BiCommand size={25} />
          SummizeMe
        </div>

        {/* theme switcher */}
        <ThemeToggle />

        {/* github */}
        <a
          className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
          href=""
        >
          <FiGithub size={22} />
        </a>
      </nav>

      <div className="py-4 px-6 sm:px-16 lg:max-w-3xl w-full mx-auto text-center space-y-4">
        <h1 className="font-black text-4xl sm:text-5xl">
          Effortlessly distill articles with our{" "}
          <span className="bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent block md:inline">
            AI-powered
          </span>{" "}
          summarizer.
        </h1>
        <p className="sm:text-lg text-gray-500 dark:text-gray-300">
          Summarize articles in seconds with our AI-powered tool. Extract key
          insights effortlessly and save valuable time with our innovative
          solution.
        </p>
      </div>
    </header>
  );
};

export default Header;
