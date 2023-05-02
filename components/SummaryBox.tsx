"use client";
import { FC, useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

interface SummaryBoxProps {
  text: string;
}

const SummaryBox: FC<SummaryBoxProps> = ({ text }) => {
  const [animatedText, setAnimatedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedText(text.slice(0, index));
      setIndex((i) => i + 1);
      if (text.length == 1) {
        clearInterval(intervalId);
      }
    }, 25);
    return () => {
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      isCopied && setIsCopied(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <article className="p-4 border text-gray-600 dark:text-gray-300 rounded-xl max-w-xl mx-auto border-gray-300 dark:border-gray-600 empty:hidden">
      <div className="flex justify-between items-center pb-4">
        <p className="font-bold text-black dark:text-white">
          Summary of Article
        </p>
        <button
          aria-label="copy button"
          className="p-2 rounded-md text-xl flex items-center justify-center bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-200"
          type="submit"
          onClick={copyToClipboard}
        >
          {isCopied ? <BsCheckLg /> : <FiCopy />}
        </button>
      </div>
      {animatedText}
      {animatedText.length < text.length && "|"}
    </article>
  );
};

export default SummaryBox;
