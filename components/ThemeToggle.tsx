"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="relative h-[25px] w-[25px] ml-auto text-gray-500 dark:text-gray-400"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <BiSun
        className={`absolute top-0 left-0 ${
          theme == "light" ? " opacity-100" : " opacity-0 rotate-180"
        } transition-all duration-300`}
        size={25}
      />
      <BiMoon
        className={`absolute top-0 left-0 ${
          theme != "dark" ? " opacity-0 -rotate-180" : " opacity-100"
        } transition-all duration-300`}
        size={25}
      />
    </button>
  );
};

export default ThemeToggle;
